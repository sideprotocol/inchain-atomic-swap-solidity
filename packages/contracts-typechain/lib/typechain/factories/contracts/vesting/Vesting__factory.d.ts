import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Vesting, VestingInterface } from "../../../contracts/vesting/Vesting";
type VestingConstructorParams = [linkLibraryAddresses: VestingLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Vesting__factory extends ContractFactory {
    constructor(...args: VestingConstructorParams);
    static linkBytecode(linkLibraryAddresses: VestingLibraryAddresses): string;
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Vesting & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Vesting__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612027806100206000396000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610182578063c4d66de8146101ad578063d7c2eec7146101d6578063f2fde38b146101ff576100ca565b8063715018a6146100cf5780637623f00e146100e65780637b00ffad1461010257806382a969e214610144576100ca565b366100ca57343373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587460405160405180910390a3005b600080fd5b3480156100db57600080fd5b506100e4610228565b005b61010060048036038101906100fb9190611730565b61023c565b005b34801561010e57600080fd5b50610129600480360381019061012491906117c7565b6106f8565b60405161013b96959493929190611825565b60405180910390f35b34801561015057600080fd5b5061016b60048036038101906101669190611886565b610781565b6040516101799291906118d9565b60405180910390f35b34801561018e57600080fd5b506101976107cf565b6040516101a49190611902565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061191d565b610807565b005b3480156101e257600080fd5b506101fd60048036038101906101f891906117c7565b610996565b005b34801561020b57600080fd5b506102266004803603810190610221919061191d565b610dbf565b005b610230610e45565b61023a6000610ecc565b565b610244610fa3565b600073ffffffffffffffffffffffffffffffffffffffff166000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461031c576040517f628dbb9600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073__$2effe1973215a034e8e4a17bdeb5710028$__6333b988f590916040518263ffffffff1660e01b81526004016103559190611a37565b60006040518083038186803b15801561036d57600080fd5b505af4158015610381573d6000803e3d6000fd5b50505050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610404578134146103ff5781346040517f04157bb40000000000000000000000000000000000000000000000000000000081526004016103f69291906118d9565b60405180910390fd5b610432565b6104313330848673ffffffffffffffffffffffffffffffffffffffff16610ffa909392919063ffffffff16565b5b600042905060006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020016000815260200160008152509050806000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a082015181600501559050506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020905060005b845181101561066d578185828151811061061357610612611a59565b5b6020026020010151908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050808061066590611ab7565b9150506105f6565b5060405180608001604052808381526020018581526020018873ffffffffffffffffffffffffffffffffffffffff168152602001898152506040516106b29190611d1a565b60405180910390207fb16abbea6ba3704f5f2a80a6e86817bd96545258a4bbe645becfc85ab722675260405160405180910390a25050506106f1611259565b5050505050565b6000602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050154905086565b600160205282600052604060002060205281600052604060002081815481106107a957600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b6000806107da611272565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b600061081161129a565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff1614801561085f5750825b9050600060018367ffffffffffffffff16148015610894575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156108a2575080155b156108d9576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156109295760018560000160086101000a81548160ff0219169083151502179055505b610932866112c2565b831561098e5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516109859190611d8a565b60405180910390a15b505050505050565b61099e610fa3565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002090508160010154421015610a83576040517f35549be800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081805490501480610a9e57508080549050826005015410155b15610ad5576040517f8bdb538100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080836001015490506000846005015490505b8380549050811015610bb757610e10848281548110610b0b57610b0a611a59565b5b906000526020600020906002020160000154610b279190611da5565b82610b329190611de7565b9150814210610bb7576000612710858381548110610b5357610b52611a59565b5b9060005260206000209060020201600101548760030154610b749190611da5565b610b7e9190611e4a565b90508084610b8c9190611de7565b9350600182610b9b9190611de7565b8660050181905550508080610baf90611ab7565b915050610ae9565b5060008211610bf2576040517f3507415000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81846004016000828254610c069190611de7565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168460020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cb957610cb486838660020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166113489092919063ffffffff16565b610d6b565b60008673ffffffffffffffffffffffffffffffffffffffff1683604051610cdf90611eac565b60006040518083038185875af1925050503d8060008114610d1c576040519150601f19603f3d011682016040523d82523d6000602084013e610d21565b606091505b5050905080610d695786836040517fbcaf58d0000000000000000000000000000000000000000000000000000000008152600401610d60929190611ec1565b60405180910390fd5b505b818673ffffffffffffffffffffffffffffffffffffffff167fb21fb52d5749b80f3182f8c6992236b5e5576681880914484d7f4c9b062e619e60405160405180910390a350505050610dbb611259565b5050565b610dc7610e45565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e395760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610e309190611902565b60405180910390fd5b610e4281610ecc565b50565b610e4d611414565b73ffffffffffffffffffffffffffffffffffffffff16610e6b6107cf565b73ffffffffffffffffffffffffffffffffffffffff1614610eca57610e8e611414565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610ec19190611902565b60405180910390fd5b565b6000610ed6611272565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000610fad61141c565b90506002816000015403610fed576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002816000018190555050565b600084905060008173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e86306040518363ffffffff1660e01b815260040161103c929190611eea565b602060405180830381865afa158015611059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107d9190611f28565b9050828110156110c65780836040517f7c8db62f0000000000000000000000000000000000000000000000000000000081526004016110bd9291906118d9565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016111019190611902565b602060405180830381865afa15801561111e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111429190611f28565b90508381101561118b5780846040517f04157bb40000000000000000000000000000000000000000000000000000000081526004016111829291906118d9565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd8787876040518463ffffffff1660e01b81526004016111c893929190611f55565b6020604051808303816000875af11580156111e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120b9190611fc4565b611250578585856040517fca7f5f0e00000000000000000000000000000000000000000000000000000000815260040161124793929190611f55565b60405180910390fd5b50505050505050565b600061126361141c565b90506001816000018190555050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b6112ca611444565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361133c5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016113339190611902565b60405180910390fd5b61134581610ecc565b50565b60008390508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401611388929190611ec1565b6020604051808303816000875af11580156113a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cb9190611fc4565b61140e5782826040517f1c43b976000000000000000000000000000000000000000000000000000000008152600401611405929190611ec1565b60405180910390fd5b50505050565b600033905090565b60007f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00905090565b61144c611484565b611482576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600061148e61129a565b60000160089054906101000a900460ff16905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6114cb816114b8565b81146114d657600080fd5b50565b6000813590506114e8816114c2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611519826114ee565b9050919050565b6115298161150e565b811461153457600080fd5b50565b60008135905061154681611520565b92915050565b6000819050919050565b61155f8161154c565b811461156a57600080fd5b50565b60008135905061157c81611556565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115d082611587565b810181811067ffffffffffffffff821117156115ef576115ee611598565b5b80604052505050565b60006116026114a4565b905061160e82826115c7565b919050565b600067ffffffffffffffff82111561162e5761162d611598565b5b602082029050602081019050919050565b600080fd5b600080fd5b60006040828403121561165f5761165e611644565b5b61166960406115f8565b905060006116798482850161156d565b600083015250602061168d8482850161156d565b60208301525092915050565b60006116ac6116a784611613565b6115f8565b905080838252602082019050604084028301858111156116cf576116ce61163f565b5b835b818110156116f857806116e48882611649565b8452602084019350506040810190506116d1565b5050509392505050565b600082601f83011261171757611716611582565b5b8135611727848260208601611699565b91505092915050565b600080600080600060a0868803121561174c5761174b6114ae565b5b600061175a888289016114d9565b955050602061176b88828901611537565b945050604061177c88828901611537565b935050606061178d8882890161156d565b925050608086013567ffffffffffffffff8111156117ae576117ad6114b3565b5b6117ba88828901611702565b9150509295509295909350565b600080604083850312156117de576117dd6114ae565b5b60006117ec85828601611537565b92505060206117fd858286016114d9565b9150509250929050565b6118108161150e565b82525050565b61181f8161154c565b82525050565b600060c08201905061183a6000830189611807565b6118476020830188611816565b6118546040830187611807565b6118616060830186611816565b61186e6080830185611816565b61187b60a0830184611816565b979650505050505050565b60008060006060848603121561189f5761189e6114ae565b5b60006118ad86828701611537565b93505060206118be868287016114d9565b92505060406118cf8682870161156d565b9150509250925092565b60006040820190506118ee6000830185611816565b6118fb6020830184611816565b9392505050565b60006020820190506119176000830184611807565b92915050565b600060208284031215611933576119326114ae565b5b600061194184828501611537565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61197f8161154c565b82525050565b60408201600082015161199b6000850182611976565b5060208201516119ae6020850182611976565b50505050565b60006119c08383611985565b60408301905092915050565b6000602082019050919050565b60006119e48261194a565b6119ee8185611955565b93506119f983611966565b8060005b83811015611a2a578151611a1188826119b4565b9750611a1c836119cc565b9250506001810190506119fd565b5085935050505092915050565b60006020820190508181036000830152611a5181846119d9565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ac28261154c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611af457611af3611a88565b5b600182019050919050565b611b088161150e565b82525050565b6000611b1a8383611aff565b60208301905092915050565b611b2f8161154c565b82525050565b6000611b418383611b26565b60208301905092915050565b600082016000820151611b608482611b0e565b9350506020820151611b728482611b35565b9350506040820151611b848482611b0e565b9350506060820151611b968482611b35565b9350506080820151611ba88482611b35565b93505060a0820151611bba8482611b35565b935050505050565b6000611bce8383611b4d565b60c08301905092915050565b600081905092915050565b600082016000820151611bf88482611b35565b9350506020820151611c0a8482611b35565b935050505050565b6000611c1e8383611be5565b60408301905092915050565b6000611c358261194a565b611c3f8185611bda565b9350611c4a83611966565b8060005b83811015611c7b578151611c628882611c12565b9750611c6d836119cc565b925050600181019050611c4e565b5085935050505092915050565b6000611c948383611c2a565b905092915050565b611ca5816114b8565b82525050565b6000611cb78383611c9c565b60208301905092915050565b60008083016000830151611cd78582611bc2565b9450506020830151611ce98582611c88565b9450506040830151611cfb8582611b0e565b9450506060830151611d0d8582611cab565b9450508391505092915050565b6000611d268284611cc3565b915081905092915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000611d74611d6f611d6a84611d31565b611d4f565b611d3b565b9050919050565b611d8481611d59565b82525050565b6000602082019050611d9f6000830184611d7b565b92915050565b6000611db08261154c565b9150611dbb8361154c565b9250828202611dc98161154c565b91508282048414831517611de057611ddf611a88565b5b5092915050565b6000611df28261154c565b9150611dfd8361154c565b9250828201905080821115611e1557611e14611a88565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611e558261154c565b9150611e608361154c565b925082611e7057611e6f611e1b565b5b828204905092915050565b600081905092915050565b50565b6000611e96600083611e7b565b9150611ea182611e86565b600082019050919050565b6000611eb782611e89565b9150819050919050565b6000604082019050611ed66000830185611807565b611ee36020830184611816565b9392505050565b6000604082019050611eff6000830185611807565b611f0c6020830184611807565b9392505050565b600081519050611f2281611556565b92915050565b600060208284031215611f3e57611f3d6114ae565b5b6000611f4c84828501611f13565b91505092915050565b6000606082019050611f6a6000830186611807565b611f776020830185611807565b611f846040830184611816565b949350505050565b60008115159050919050565b611fa181611f8c565b8114611fac57600080fd5b50565b600081519050611fbe81611f98565b92915050565b600060208284031215611fda57611fd96114ae565b5b6000611fe884828501611faf565b9150509291505056fea26469706673582212202accd36f06e0ff275f2c7ae75de4bf49de06bf2f7621e5f821c5c10228767ca364736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DuplicateReleaseSchedule";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTotalPercentage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVesting";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVestedTokensAvailable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVestedTokensForRelease";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }];
        readonly name: "NotAllowedTransferAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "real";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expected";
            readonly type: "uint256";
        }];
        readonly name: "NotEnoughFund";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OverMaximumReleaseStep";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TransferFromFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TransferToRecipientFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "beneficiary";
            readonly type: "address";
        }];
        readonly name: "VestingAlreadyStarted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VestingNotStarted";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "start";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amountReleased";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lastReleasedStep";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IVesting.VestingSchedule";
                readonly name: "schedule";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "durationInHours";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "percentage";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IAtomicSwapBase.Release[]";
                readonly name: "release";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "beneficiary";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }];
            readonly indexed: true;
            readonly internalType: "struct IVesting.VestingInfo";
            readonly name: "vesting";
            readonly type: "tuple";
        }];
        readonly name: "NewVesting";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Received";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beneficiary";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Released";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_admin";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "beneficiary";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "release";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "releaseInfos";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "durationInHours";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "percentage";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "beneficiary";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "durationInHours";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percentage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAtomicSwapBase.Release[]";
            readonly name: "releases";
            readonly type: "tuple[]";
        }];
        readonly name: "startVesting";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "vestingSchedules";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountReleased";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastReleasedStep";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): VestingInterface;
    static connect(address: string, runner?: ContractRunner | null): Vesting;
}
export interface VestingLibraryAddresses {
    ["contracts/abstracts/libs/utils/AtomicSwapMsgValidator.sol:AtomicSwapMsgValidator"]: string;
}
export {};
