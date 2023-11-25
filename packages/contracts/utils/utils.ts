import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";

import { ethers, upgrades } from "hardhat";
import {
  Vesting,
  IAtomicSwapBase,
  InchainAtomicSwap as ICAtomicSwap,
  IVesting,
  MockToken,
} from "@sideprotocol/contracts-typechain";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { keccak256 } from "ethers";
import { BlockTime } from "./time";
import { boolean } from "hardhat/internal/core/params/argumentTypes";
export const ERC20_MINT_AMOUNT = 100000000;
// stable coins
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const ETH_USDC = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";

export const WHALES: string[] = [];

export const Utils = {
  prepareInChainAtomicTest: async function () {
    //import users
    const accounts = await ethers.getSigners();
    const [owner] = accounts;

    // deploy libraries
    const atomicSwapStateLogicFactory = await ethers.getContractFactory(
      "AtomicSwapStateLogic"
    );
    const atomicSwapStateLogic = await atomicSwapStateLogicFactory.deploy();

    const TokenTransferHelperFactory = await ethers.getContractFactory(
      "TokenTransferHelper"
    );
    const tokenTransferHelper = await TokenTransferHelperFactory.deploy();

    const atomicSwapMsgValidatorFactory = await ethers.getContractFactory(
      "AtomicSwapMsgValidator"
    );
    const atomicSwapMsgValidator = await atomicSwapMsgValidatorFactory.deploy();

    const sellTokenFeeRate = 100;
    const buyTokenFeeRate = 120;
    const treasury = accounts[10].address;

    // Deploy vesting contract.
    const vestingManagerFactory = await ethers.getContractFactory("Vesting");
    const vestingManager = await upgrades.deployProxy(
      vestingManagerFactory,
      [owner.address],
      {
        initializer: "initialize",
      }
    );
    const vestingManagerAddress = await vestingManager.getAddress();

    // AtomicSwap contract deploy
    const atomicSwapFactory = await ethers.getContractFactory(
      "InchainAtomicSwap",
      {
        libraries: {
          AtomicSwapStateLogic: await atomicSwapStateLogic.getAddress(),
          TokenTransferHelper: await tokenTransferHelper.getAddress(),
          AtomicSwapMsgValidator: await atomicSwapMsgValidator.getAddress(),
        },
      }
    );

    // deploy contract
    const atomicSwap = await upgrades.deployProxy(
      atomicSwapFactory,
      [
        owner.address,
        vestingManagerAddress,
        treasury,
        sellTokenFeeRate,
        buyTokenFeeRate,
      ],
      {
        initializer: "initialize",
        unsafeAllowLinkedLibraries: true,
      }
    );

    // Deploy Mock Token
    const mockERC20TokenFactory = await ethers.getContractFactory("MockToken");
    const mockUSDC = await mockERC20TokenFactory.deploy("USDC", "USDC");
    const mockUSDT = await mockERC20TokenFactory.deploy("USDT", "USDT");
    const mockDAI = await mockERC20TokenFactory.deploy("DAI", "DAI");

    const MINT_AMOUNT = ethers.parseEther("100000");

    await Promise.all(
      accounts.map(async (account) => {
        await mockUSDC.mint(account.address, MINT_AMOUNT);
        await mockUSDT.mint(account.address, MINT_AMOUNT);
        await mockDAI.mint(account.address, MINT_AMOUNT);

        await mockUSDC.approve(await atomicSwap.getAddress(), MINT_AMOUNT);
        await mockUSDT.approve(await atomicSwap.getAddress(), MINT_AMOUNT);
        await mockDAI.approve(await atomicSwap.getAddress(), MINT_AMOUNT);
      })
    );

    return {
      atomicSwap: atomicSwap as unknown as ICAtomicSwap,
      usdc: mockUSDC as unknown as MockToken,
      usdt: mockUSDT as unknown as MockToken,
      dai: mockDAI as unknown as MockToken,
      vestingManager: vestingManager as unknown as Vesting,
      sellTokenFeeRate,
      buyTokenFeeRate,
      treasury,
    };
  },
};

export const createDefaultAtomicOrder = async (
  withNativeSellToken?: boolean,
  withNativeBuyToken?: boolean,
  noTaker?: boolean,
  acceptBid?: boolean
) => {
  const {
    atomicSwap,
    usdc,
    usdt,
    sellTokenFeeRate,
    buyTokenFeeRate,
    treasury,
  } = await loadFixture(Utils.prepareInChainAtomicTest);
  const accounts = await ethers.getSigners();
  const [maker, taker] = accounts;
  const expireAt = await BlockTime.AfterSeconds(10000);
  const uuid = generateOrderID();
  const payload = {
    uuid,
    sellToken: {
      token: withNativeSellToken ? ethers.ZeroAddress : await usdc.getAddress(),
      amount: ethers.parseEther("20"),
    },
    buyToken: {
      token: withNativeBuyToken ? ethers.ZeroAddress : await usdt.getAddress(),
      amount: ethers.parseEther("20"),
    },
    maker: maker.address,
    minBidAmount: ethers.parseEther("15"),
    desiredTaker: noTaker ? ethers.ZeroAddress : taker.address,
    expireAt: expireAt,
    acceptBid: acceptBid ?? true,
  };

  if (!withNativeSellToken) {
    const amount = await usdc.allowance(
      accounts[0].address,
      await atomicSwap.getAddress()
    );
    await expect(
      usdc.approve(
        await atomicSwap.getAddress(),
        amount + payload.sellToken.amount
      )
    ).not.to.reverted;
  }

  if (!withNativeBuyToken) {
    const amount = (await usdt.allowance(
      accounts[0].address,
      await atomicSwap.getAddress()
    )) as bigint;
    await expect(
      usdt.approve(
        await atomicSwap.getAddress(),
        amount + payload.buyToken.amount
      )
    ).not.to.reverted;
  }

  let nativeTokenAmount = BigInt(0);
  if (withNativeSellToken) {
    nativeTokenAmount = nativeTokenAmount + payload.sellToken.amount;
    const tx = atomicSwap.makeSwap(payload, {
      value: nativeTokenAmount,
    });
    await expect(tx).to.changeEtherBalance(
      await atomicSwap.getAddress(),
      nativeTokenAmount
    );
    await expect(tx).to.emit(atomicSwap, "AtomicSwapOrderCreated");
  } else {
    const tx = atomicSwap.makeSwap(payload);
    await expect(tx).to.changeTokenBalance(
      usdc,
      await atomicSwap.getAddress(),
      payload.sellToken.amount
    );
    await expect(tx).emit(atomicSwap, "AtomicSwapOrderCreated");
  }

  const id = newAtomicSwapOrderID(await atomicSwap.getAddress(), payload.uuid);
  const orderIDAtContractA = await atomicSwap.swapOrder(id);
  expect(orderIDAtContractA.id).to.equal(id);

  return {
    orderID: id,
    maker,
    taker,

    atomicSwap,

    payload: payload,
    usdt,
    usdc,
    sellTokenFeeRate,
    buyTokenFeeRate,
    treasury,
  };
};

export const createDefaultVestingAtomicOrder = async (
  vestingParams: {
    durationInHours: bigint;
    percentage: bigint;
  }[],

  withNativeSellToken?: boolean,
  withNativeBuyToken?: boolean,
  noTaker?: boolean,
  acceptBid?: boolean
) => {
  const {
    atomicSwap,
    usdc,
    usdt,
    sellTokenFeeRate,
    buyTokenFeeRate,
    treasury,
    vestingManager,
  } = await loadFixture(Utils.prepareInChainAtomicTest);
  const accounts = await ethers.getSigners();
  const [maker, taker] = accounts;
  const expireAt = await BlockTime.AfterSeconds(10000);
  const uuid = generateOrderID();
  const payload = {
    uuid,
    sellToken: {
      token: withNativeSellToken ? ethers.ZeroAddress : await usdc.getAddress(),
      amount: ethers.parseEther("20"),
    },
    buyToken: {
      token: withNativeBuyToken ? ethers.ZeroAddress : await usdt.getAddress(),
      amount: ethers.parseEther("20"),
    },
    maker: maker.address,
    minBidAmount: ethers.parseEther("15"),
    desiredTaker: noTaker ? ethers.ZeroAddress : taker.address,
    expireAt: expireAt,
    acceptBid: acceptBid ?? true,
  };

  if (!withNativeSellToken) {
    const amount = await usdc.allowance(
      accounts[0].address,
      await atomicSwap.getAddress()
    );
    await expect(
      usdc.approve(
        await atomicSwap.getAddress(),
        amount + payload.sellToken.amount
      )
    ).not.to.reverted;
  }

  if (!withNativeBuyToken) {
    const amount = (await usdt.allowance(
      accounts[0].address,
      await atomicSwap.getAddress()
    )) as bigint;
    await expect(
      usdt.approve(
        await atomicSwap.getAddress(),
        amount + payload.buyToken.amount
      )
    ).not.to.reverted;
  }

  let nativeTokenAmount = BigInt(0);
  if (withNativeSellToken) {
    nativeTokenAmount = nativeTokenAmount + payload.sellToken.amount;
    const tx = atomicSwap.makeSwapWithVesting(payload, vestingParams, {
      value: nativeTokenAmount,
    });
    await expect(tx).to.changeEtherBalance(
      await atomicSwap.getAddress(),
      nativeTokenAmount
    );
    await expect(tx).to.emit(atomicSwap, "AtomicSwapOrderCreated");
  } else {
    const tx = atomicSwap.makeSwapWithVesting(payload, vestingParams);
    await expect(tx).to.changeTokenBalance(
      usdc,
      await atomicSwap.getAddress(),
      payload.sellToken.amount
    );
    await expect(tx).emit(atomicSwap, "AtomicSwapOrderCreated");
  }

  const id = newAtomicSwapOrderID(await atomicSwap.getAddress(), payload.uuid);
  const orderIDAtContractA = await atomicSwap.swapOrder(id);
  expect(orderIDAtContractA.id).to.equal(id);

  return {
    orderID: id,
    maker,
    taker,

    atomicSwap,

    payload: payload,
    usdt,
    usdc,
    sellTokenFeeRate,
    buyTokenFeeRate,
    treasury,
    vestingManager,
  };
};

export const bidToDefaultAtomicOrder = async (
  withSellNativeToken?: boolean,
  withBuyNativeToken?: boolean,
  noTaker?: boolean
) => {
  const orderParams = await createDefaultAtomicOrder(
    withSellNativeToken,
    withBuyNativeToken,
    noTaker
  );
  const { atomicSwap, maker, taker, orderID, usdc, usdt } = orderParams;

  // try to take swap
  const buyToken = (await atomicSwap.swapOrder(orderID)).buyToken;

  const bidPayload = {
    bidder: taker.address,
    bidderReceiver: taker.address,
    bidAmount: buyToken.amount,
    orderID: orderID,
    expireTimestamp: await BlockTime.AfterSeconds(30),
  };

  if (withBuyNativeToken) {
    await expect(
      atomicSwap.connect(taker).placeBid(bidPayload, {
        value: buyToken.amount,
      })
    ).to.changeEtherBalance(await atomicSwap.getAddress(), buyToken.amount);
  } else {
    await usdt
      .connect(taker)
      .approve(await atomicSwap.getAddress(), buyToken.amount);
    await expect(
      atomicSwap.connect(taker).placeBid(bidPayload)
    ).to.changeTokenBalance(
      usdt,
      await atomicSwap.getAddress(),
      buyToken.amount
    );
  }

  return { ...orderParams, ...bidPayload };
};

export const bidToDefaultVestingAtomicOrder = async (
  withSellNativeToken?: boolean,
  withBuyNativeToken?: boolean,
  noTaker?: boolean
) => {
  const vestingParams = [
    {
      durationInHours: BigInt(1),
      percentage: BigInt(5000),
    },
    {
      durationInHours: BigInt(1),
      percentage: BigInt(5000),
    },
  ];
  const orderParams = await createDefaultVestingAtomicOrder(
    vestingParams,
    withSellNativeToken,
    withBuyNativeToken,
    noTaker
  );
  const { atomicSwap, maker, taker, orderID, usdc, usdt } = orderParams;

  // try to take swap
  const buyToken = (await atomicSwap.swapOrder(orderID)).buyToken;

  const bidPayload = {
    bidder: taker.address,
    bidderReceiver: taker.address,
    bidAmount: buyToken.amount,
    orderID: orderID,
    expireTimestamp: await BlockTime.AfterSeconds(30),
  };

  if (withBuyNativeToken) {
    await expect(
      atomicSwap.connect(taker).placeBid(bidPayload, {
        value: buyToken.amount,
      })
    ).to.changeEtherBalance(await atomicSwap.getAddress(), buyToken.amount);
  } else {
    await usdt
      .connect(taker)
      .approve(await atomicSwap.getAddress(), buyToken.amount);
    await expect(
      atomicSwap.connect(taker).placeBid(bidPayload)
    ).to.changeTokenBalance(
      usdt,
      await atomicSwap.getAddress(),
      buyToken.amount
    );
  }

  return { ...orderParams, ...bidPayload };
};

export const testTakeSwap = async (
  isNativeSellToken?: boolean,
  isNativeBuyToken?: boolean
) => {
  const [, , takerReceiver] = await ethers.getSigners();
  const {
    orderID,
    atomicSwap,
    maker,
    taker,
    usdc,
    usdt,
    treasury,
    sellTokenFeeRate,
    buyTokenFeeRate,
  } = await createDefaultAtomicOrder(
    isNativeSellToken,
    isNativeBuyToken,
    false,
    false
  );

  const order = await atomicSwap.swapOrder(orderID);
  const buyToken = (await atomicSwap.swapOrder(orderID)).buyToken;
  const atomicSwapAddress = await atomicSwap.getAddress();
  await expect(usdt.connect(taker).approve(atomicSwapAddress, buyToken.amount))
    .not.to.reverted;

  if (order.sellToken.token == ethers.ZeroAddress) {
    const tx = atomicSwap.connect(taker).takeSwap({
      orderID,
      takerReceiver: takerReceiver.address,
    });

    const { amountAfterFee, feeAmount } = calcSwapAmount(
      order.buyToken.amount,
      buyTokenFeeRate
    );

    await expect(tx).to.changeEtherBalances(
      [takerReceiver, treasury],
      [amountAfterFee, feeAmount]
    );
    const amountAfterSwap = calcSwapAmount(
      order.sellToken.amount,
      sellTokenFeeRate
    );
    await expect(tx).changeTokenBalances(
      usdt,
      [maker.address, treasury],
      [amountAfterSwap.amountAfterFee, amountAfterSwap.feeAmount]
    );
  } else {
    const tx = atomicSwap.connect(taker).takeSwap(
      {
        orderID,
        takerReceiver: takerReceiver.address,
      },
      { value: order.buyToken.amount }
    );

    const { amountAfterFee, feeAmount } = calcSwapAmount(
      order.buyToken.amount,
      buyTokenFeeRate
    );

    await expect(tx).to.changeTokenBalances(
      usdc,
      [takerReceiver.address, treasury],
      [amountAfterFee, feeAmount]
    );
    const amountAfterSwap = calcSwapAmount(
      order.sellToken.amount,
      sellTokenFeeRate
    );
    await expect(tx).changeEtherBalances(
      [maker.address, treasury],
      [amountAfterSwap.amountAfterFee, amountAfterSwap.feeAmount]
    );
  }

  expect((await atomicSwap.swapOrder(orderID)).status).to.equal(2);
  return {
    orderID,
    atomicSwap,
    taker,
  };
};

// Utility methods
export const encodePayload = (types: string[], values: any[]): string => {
  return new ethers.AbiCoder().encode(types, values);
};

export function newAtomicSwapOrderID(contract: string, uuid: string): string {
  const encoder = new ethers.AbiCoder();
  const id = keccak256(
    encoder.encode(["address", "bytes32"], [contract, uuid])
  );
  return id;
}

export function generateOrderID(): string {
  const uuidStr = ethers.randomBytes(32);
  const encoder = new ethers.AbiCoder();
  const id = keccak256(encoder.encode(["bytes"], [uuidStr]));
  return id;
}

export const saveDeployedAddress = async (
  atomicswap: string,
  usdc?: string,
  usdt?: string
) => {
  const settingInfo: {
    atomicswap: string;
    mockUSDC: string;
    mockUSDT: string;
  } = {
    atomicswap: "",
    mockUSDC: "",
    mockUSDT: "",
  };
  settingInfo.atomicswap = atomicswap;
  settingInfo.mockUSDC = usdc ?? "";
  settingInfo.mockUSDT = usdt ?? "";
  const settingsPath = "../contracts-typechain/settings";
  if (!existsSync(settingsPath)) {
    mkdirSync(settingsPath, { recursive: true });
  } else {
    const rawData = readFileSync(`${settingsPath}/settings.json`);
    const data = JSON.parse(rawData.toString());
  }
  const json = JSON.stringify(settingInfo);
  writeFileSync(`${settingsPath}/settings.json`, json, "utf-8");
};

export function generateRandomString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function calcSwapAmount(amount: bigint, feeRate: number) {
  // Convert the feeRate to a bigint with a scaling factor (in this case, 1000 for precision)
  const feeRateBigInt = BigInt(Math.round(feeRate));
  // Calculate the feeAmount in bigint
  const feeAmount = (amount * feeRateBigInt) / BigInt(10000);

  // Subtract the feeAmount from the initial amount to get the amount after fee
  const amountAfterFee = amount - feeAmount;

  return {
    amountAfterFee,
    feeAmount,
  };
}

// factor has to be positive value always.
export function safeFactor(amount: bigint, factor: number): bigint {
  const roundedFactor = Math.floor(factor * 10000);
  return (amount * BigInt(roundedFactor)) / BigInt(10000);
}
