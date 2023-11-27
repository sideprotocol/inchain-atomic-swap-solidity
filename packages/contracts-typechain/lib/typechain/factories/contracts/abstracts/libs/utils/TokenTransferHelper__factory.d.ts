import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { AnteHandler, AnteHandlerInterface } from "../../../../../contracts/abstracts/libs/utils/AnteHandler";
type AnteHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AnteHandler__factory extends ContractFactory {
  constructor(...args: AnteHandlerConstructorParams);
  getDeployTransaction(
    overrides?: NonPayableOverrides & {
      from?: string;
    }
  ): Promise<ContractDeployTransaction>;
  deploy(
    overrides?: NonPayableOverrides & {
      from?: string;
    }
  ): Promise<
    AnteHandler & {
      deploymentTransaction(): ContractTransactionResponse;
    }
  >;
  connect(runner: ContractRunner | null): AnteHandler__factory;
  static readonly bytecode =
    "0x610caf610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c806306cf228014610045578063baa21b8c1461006e575b600080fd5b81801561005157600080fd5b5061006c600480360381019061006791906107ef565b610097565b005b81801561007a57600080fd5b50610095600480360381019061009091906107ef565b610128565b005b60008284866100a691906108ab565b6100b0919061091c565b9050600081866100c0919061094d565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610111576101018888836101bb565b61010c8884836101bb565b61011e565b61011d878483856102f1565b5b5050505050505050565b600082848661013791906108ab565b610141919061091c565b905060008186610151919061094d565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146101a457610193883389846104f7565b61019f883385856104f7565b6101b1565b6101b0878483856102f1565b5b5050505050505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016101ed92919061099f565b6040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161023b9190610a39565b6000604051808303816000865af19150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b50915091508180156102ab57506000815114806102aa5750808060200190518101906102a99190610a88565b5b5b6102ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e190610b38565b60405180910390fd5b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806103585750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561038f576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff16836040516103b590610b7e565b60006040518083038185875af1925050503d80600081146103f2576040519150601f19603f3d011682016040523d82523d6000602084013e6103f7565b606091505b505090508061043f5784836040517fbcaf58d000000000000000000000000000000000000000000000000000000000815260040161043692919061099f565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff168360405161046590610b7e565b60006040518083038185875af1925050503d80600081146104a2576040519150601f19603f3d011682016040523d82523d6000602084013e6104a7565b606091505b50509050806104ef5784836040517f58590fb90000000000000000000000000000000000000000000000000000000081526004016104e692919061099f565b60405180910390fd5b505050505050565b600084905060008173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e86306040518363ffffffff1660e01b8152600401610539929190610b93565b602060405180830381865afa158015610556573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057a9190610bd1565b9050828110156105c35780836040517f7c8db62f0000000000000000000000000000000000000000000000000000000081526004016105ba929190610bfe565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016105fe9190610c27565b602060405180830381865afa15801561061b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063f9190610bd1565b9050838110156106885780846040517f04157bb400000000000000000000000000000000000000000000000000000000815260040161067f929190610bfe565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd8787876040518463ffffffff1660e01b81526004016106c593929190610c42565b6020604051808303816000875af11580156106e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107089190610a88565b61074d578585856040517fca7f5f0e00000000000000000000000000000000000000000000000000000000815260040161074493929190610c42565b60405180910390fd5b50505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107868261075b565b9050919050565b6107968161077b565b81146107a157600080fd5b50565b6000813590506107b38161078d565b92915050565b6000819050919050565b6107cc816107b9565b81146107d757600080fd5b50565b6000813590506107e9816107c3565b92915050565b60008060008060008060c0878903121561080c5761080b610756565b5b600061081a89828a016107a4565b965050602061082b89828a016107a4565b955050604061083c89828a016107da565b945050606061084d89828a016107da565b935050608061085e89828a016107da565b92505060a061086f89828a016107a4565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108b6826107b9565b91506108c1836107b9565b92508282026108cf816107b9565b915082820484148315176108e6576108e561087c565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610927826107b9565b9150610932836107b9565b925082610942576109416108ed565b5b828204905092915050565b6000610958826107b9565b9150610963836107b9565b925082820390508181111561097b5761097a61087c565b5b92915050565b61098a8161077b565b82525050565b610999816107b9565b82525050565b60006040820190506109b46000830185610981565b6109c16020830184610990565b9392505050565b600081519050919050565b600081905092915050565b60005b838110156109fc5780820151818401526020810190506109e1565b60008484015250505050565b6000610a13826109c8565b610a1d81856109d3565b9350610a2d8185602086016109de565b80840191505092915050565b6000610a458284610a08565b915081905092915050565b60008115159050919050565b610a6581610a50565b8114610a7057600080fd5b50565b600081519050610a8281610a5c565b92915050565b600060208284031215610a9e57610a9d610756565b5b6000610aac84828501610a73565b91505092915050565b600082825260208201905092915050565b7f5472616e7366657248656c7065723a3a736166655472616e736665723a20747260008201527f616e73666572206661696c656400000000000000000000000000000000000000602082015250565b6000610b22602d83610ab5565b9150610b2d82610ac6565b604082019050919050565b60006020820190508181036000830152610b5181610b15565b9050919050565b50565b6000610b686000836109d3565b9150610b7382610b58565b600082019050919050565b6000610b8982610b5b565b9150819050919050565b6000604082019050610ba86000830185610981565b610bb56020830184610981565b9392505050565b600081519050610bcb816107c3565b92915050565b600060208284031215610be757610be6610756565b5b6000610bf584828501610bbc565b91505092915050565b6000604082019050610c136000830185610990565b610c206020830184610990565b9392505050565b6000602082019050610c3c6000830184610981565b92915050565b6000606082019050610c576000830186610981565b610c646020830185610981565b610c716040830184610990565b94935050505056fea2646970667358221220b8a565a5b2af3b8c5f7b4b3781e3d374189c3affc2a3044c1ce0d0cbd055d93b64736f6c63430008140033";
  static readonly abi: readonly [
    {
      readonly inputs: readonly [];
      readonly name: "InvalidAddress";
      readonly type: "error";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "uint256";
          readonly name: "amount";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "allowance";
          readonly type: "uint256";
        }
      ];
      readonly name: "NotAllowedTransferAmount";
      readonly type: "error";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "uint256";
          readonly name: "real";
          readonly type: "uint256";
        },
        {
          readonly internalType: "uint256";
          readonly name: "expected";
          readonly type: "uint256";
        }
      ];
      readonly name: "NotEnoughFund";
      readonly type: "error";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "from";
          readonly type: "address";
        },
        {
          readonly internalType: "address";
          readonly name: "to";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amount";
          readonly type: "uint256";
        }
      ];
      readonly name: "TransferFromFailed";
      readonly type: "error";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "recipient";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amount";
          readonly type: "uint256";
        }
      ];
      readonly name: "TransferToRecipientFailed";
      readonly type: "error";
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: "address";
          readonly name: "recipient";
          readonly type: "address";
        },
        {
          readonly internalType: "uint256";
          readonly name: "amount";
          readonly type: "uint256";
        }
      ];
      readonly name: "TransferToTreasuryFailed";
      readonly type: "error";
    }
  ];
  static createInterface(): AnteHandlerInterface;
  static connect(address: string, runner?: ContractRunner | null): AnteHandler;
}
export {};
