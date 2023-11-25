import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Vesting, VestingInterface } from "../../../contracts/vesting/Vesting";
type VestingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Vesting__factory extends ContractFactory {
    constructor(...args: VestingConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Vesting & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Vesting__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611def806100206000396000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610182578063c4d66de8146101ad578063d7c2eec7146101d6578063f2fde38b146101ff576100ca565b8063715018a6146100cf5780637623f00e146100e65780637b00ffad1461010257806382a969e214610144576100ca565b366100ca57343373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587460405160405180910390a3005b600080fd5b3480156100db57600080fd5b506100e4610228565b005b61010060048036038101906100fb91906115df565b61023c565b005b34801561010e57600080fd5b5061012960048036038101906101249190611676565b6105a7565b60405161013b969594939291906116d4565b60405180910390f35b34801561015057600080fd5b5061016b60048036038101906101669190611735565b610630565b604051610179929190611788565b60405180910390f35b34801561018e57600080fd5b5061019761067e565b6040516101a491906117b1565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf91906117cc565b6106b6565b005b3480156101e257600080fd5b506101fd60048036038101906101f89190611676565b610845565b005b34801561020b57600080fd5b50610226600480360381019061022191906117cc565b610c6e565b005b610230610cf4565b61023a6000610d7b565b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102bb578134146102b65781346040517f04157bb40000000000000000000000000000000000000000000000000000000081526004016102ad929190611788565b60405180910390fd5b6102e9565b6102e83330848673ffffffffffffffffffffffffffffffffffffffff16610e52909392919063ffffffff16565b5b600042905060006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020016000815260200160008152509050806000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a082015181600501559050506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000898152602001908152602001600020905060005b845181101561052457818582815181106104ca576104c96117f9565b5b6020026020010151908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050808061051c90611857565b9150506104ad565b5060405180608001604052808381526020018581526020018873ffffffffffffffffffffffffffffffffffffffff168152602001898152506040516105699190611ae2565b60405180910390207fb16abbea6ba3704f5f2a80a6e86817bd96545258a4bbe645becfc85ab722675260405160405180910390a25050505050505050565b6000602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050154905086565b6001602052826000526040600020602052816000526040600020818154811061065857600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b6000806106896110b1565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b60006106c06110d9565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff1614801561070e5750825b9050600060018367ffffffffffffffff16148015610743575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610751575080155b15610788576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156107d85760018560000160086101000a81548160ff0219169083151502179055505b6107e186611101565b831561083d5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516108349190611b52565b60405180910390a15b505050505050565b61084d611187565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002090508160010154421015610932576040517f35549be800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008180549050148061094d57508080549050826005015410155b15610984576040517f8bdb538100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080836001015490506000846005015490505b8380549050811015610a6657610e108482815481106109ba576109b96117f9565b5b9060005260206000209060020201600001546109d69190611b6d565b826109e19190611baf565b9150814210610a66576000612710858381548110610a0257610a016117f9565b5b9060005260206000209060020201600101548760030154610a239190611b6d565b610a2d9190611c12565b90508084610a3b9190611baf565b9350600182610a4a9190611baf565b8660050181905550508080610a5e90611857565b915050610998565b5060008211610aa1576040517f3507415000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81846004016000828254610ab59190611baf565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168460020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b6857610b6386838660020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111de9092919063ffffffff16565b610c1a565b60008673ffffffffffffffffffffffffffffffffffffffff1683604051610b8e90611c74565b60006040518083038185875af1925050503d8060008114610bcb576040519150601f19603f3d011682016040523d82523d6000602084013e610bd0565b606091505b5050905080610c185786836040517fbcaf58d0000000000000000000000000000000000000000000000000000000008152600401610c0f929190611c89565b60405180910390fd5b505b818673ffffffffffffffffffffffffffffffffffffffff167fb21fb52d5749b80f3182f8c6992236b5e5576681880914484d7f4c9b062e619e60405160405180910390a350505050610c6a6112aa565b5050565b610c76610cf4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ce85760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610cdf91906117b1565b60405180910390fd5b610cf181610d7b565b50565b610cfc6112c3565b73ffffffffffffffffffffffffffffffffffffffff16610d1a61067e565b73ffffffffffffffffffffffffffffffffffffffff1614610d7957610d3d6112c3565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610d7091906117b1565b60405180910390fd5b565b6000610d856110b1565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b600084905060008173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e86306040518363ffffffff1660e01b8152600401610e94929190611cb2565b602060405180830381865afa158015610eb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed59190611cf0565b905082811015610f1e5780836040517f7c8db62f000000000000000000000000000000000000000000000000000000008152600401610f15929190611788565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401610f5991906117b1565b602060405180830381865afa158015610f76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9a9190611cf0565b905083811015610fe35780846040517f04157bb4000000000000000000000000000000000000000000000000000000008152600401610fda929190611788565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd8787876040518463ffffffff1660e01b815260040161102093929190611d1d565b6020604051808303816000875af115801561103f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110639190611d8c565b6110a8578585856040517fca7f5f0e00000000000000000000000000000000000000000000000000000000815260040161109f93929190611d1d565b60405180910390fd5b50505050505050565b60007f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300905090565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b6111096112cb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361117b5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161117291906117b1565b60405180910390fd5b61118481610d7b565b50565b600061119161130b565b905060028160000154036111d1576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002816000018190555050565b60008390508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161121e929190611c89565b6020604051808303816000875af115801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190611d8c565b6112a45782826040517f1c43b97600000000000000000000000000000000000000000000000000000000815260040161129b929190611c89565b60405180910390fd5b50505050565b60006112b461130b565b90506001816000018190555050565b600033905090565b6112d3611333565b611309576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00905090565b600061133d6110d9565b60000160089054906101000a900460ff16905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61137a81611367565b811461138557600080fd5b50565b60008135905061139781611371565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113c88261139d565b9050919050565b6113d8816113bd565b81146113e357600080fd5b50565b6000813590506113f5816113cf565b92915050565b6000819050919050565b61140e816113fb565b811461141957600080fd5b50565b60008135905061142b81611405565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147f82611436565b810181811067ffffffffffffffff8211171561149e5761149d611447565b5b80604052505050565b60006114b1611353565b90506114bd8282611476565b919050565b600067ffffffffffffffff8211156114dd576114dc611447565b5b602082029050602081019050919050565b600080fd5b600080fd5b60006040828403121561150e5761150d6114f3565b5b61151860406114a7565b905060006115288482850161141c565b600083015250602061153c8482850161141c565b60208301525092915050565b600061155b611556846114c2565b6114a7565b9050808382526020820190506040840283018581111561157e5761157d6114ee565b5b835b818110156115a7578061159388826114f8565b845260208401935050604081019050611580565b5050509392505050565b600082601f8301126115c6576115c5611431565b5b81356115d6848260208601611548565b91505092915050565b600080600080600060a086880312156115fb576115fa61135d565b5b600061160988828901611388565b955050602061161a888289016113e6565b945050604061162b888289016113e6565b935050606061163c8882890161141c565b925050608086013567ffffffffffffffff81111561165d5761165c611362565b5b611669888289016115b1565b9150509295509295909350565b6000806040838503121561168d5761168c61135d565b5b600061169b858286016113e6565b92505060206116ac85828601611388565b9150509250929050565b6116bf816113bd565b82525050565b6116ce816113fb565b82525050565b600060c0820190506116e960008301896116b6565b6116f660208301886116c5565b61170360408301876116b6565b61171060608301866116c5565b61171d60808301856116c5565b61172a60a08301846116c5565b979650505050505050565b60008060006060848603121561174e5761174d61135d565b5b600061175c868287016113e6565b935050602061176d86828701611388565b925050604061177e8682870161141c565b9150509250925092565b600060408201905061179d60008301856116c5565b6117aa60208301846116c5565b9392505050565b60006020820190506117c660008301846116b6565b92915050565b6000602082840312156117e2576117e161135d565b5b60006117f0848285016113e6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611862826113fb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361189457611893611828565b5b600182019050919050565b6118a8816113bd565b82525050565b60006118ba838361189f565b60208301905092915050565b6118cf816113fb565b82525050565b60006118e183836118c6565b60208301905092915050565b60008201600082015161190084826118ae565b935050602082015161191284826118d5565b935050604082015161192484826118ae565b935050606082015161193684826118d5565b935050608082015161194884826118d5565b93505060a082015161195a84826118d5565b935050505050565b600061196e83836118ed565b60c08301905092915050565b600081519050919050565b600081905092915050565b6000819050602082019050919050565b6000820160008201516119b384826118d5565b93505060208201516119c584826118d5565b935050505050565b60006119d983836119a0565b60408301905092915050565b6000602082019050919050565b60006119fd8261197a565b611a078185611985565b9350611a1283611990565b8060005b83811015611a43578151611a2a88826119cd565b9750611a35836119e5565b925050600181019050611a16565b5085935050505092915050565b6000611a5c83836119f2565b905092915050565b611a6d81611367565b82525050565b6000611a7f8383611a64565b60208301905092915050565b60008083016000830151611a9f8582611962565b9450506020830151611ab18582611a50565b9450506040830151611ac385826118ae565b9450506060830151611ad58582611a73565b9450508391505092915050565b6000611aee8284611a8b565b915081905092915050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000611b3c611b37611b3284611af9565b611b17565b611b03565b9050919050565b611b4c81611b21565b82525050565b6000602082019050611b676000830184611b43565b92915050565b6000611b78826113fb565b9150611b83836113fb565b9250828202611b91816113fb565b91508282048414831517611ba857611ba7611828565b5b5092915050565b6000611bba826113fb565b9150611bc5836113fb565b9250828201905080821115611bdd57611bdc611828565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611c1d826113fb565b9150611c28836113fb565b925082611c3857611c37611be3565b5b828204905092915050565b600081905092915050565b50565b6000611c5e600083611c43565b9150611c6982611c4e565b600082019050919050565b6000611c7f82611c51565b9150819050919050565b6000604082019050611c9e60008301856116b6565b611cab60208301846116c5565b9392505050565b6000604082019050611cc760008301856116b6565b611cd460208301846116b6565b9392505050565b600081519050611cea81611405565b92915050565b600060208284031215611d0657611d0561135d565b5b6000611d1484828501611cdb565b91505092915050565b6000606082019050611d3260008301866116b6565b611d3f60208301856116b6565b611d4c60408301846116c5565b949350505050565b60008115159050919050565b611d6981611d54565b8114611d7457600080fd5b50565b600081519050611d8681611d60565b92915050565b600060208284031215611da257611da161135d565b5b6000611db084828501611d77565b9150509291505056fea2646970667358221220864212c4f6cce74dbd153511e3629dc7404e761d0d3ed7c98e1d8e8e568f6baa64736f6c63430008140033";
    static readonly abi: readonly [{
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
export {};
