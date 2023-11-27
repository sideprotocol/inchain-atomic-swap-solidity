import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { AtomicSwapMsgValidator, AtomicSwapMsgValidatorInterface } from "../../../../../contracts/abstracts/libs/utils/AtomicSwapMsgValidator";
type AtomicSwapMsgValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AtomicSwapMsgValidator__factory extends ContractFactory {
    constructor(...args: AtomicSwapMsgValidatorConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AtomicSwapMsgValidator & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AtomicSwapMsgValidator__factory;
    static readonly bytecode = "0x610e12610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c8063162790551461006657806333b988f51461009657806362e454f7146100b25780639a0ebe00146100ce578063c3aee15d146100ea575b600080fd5b610080600480360381019061007b9190610771565b610106565b60405161008d91906107b9565b60405180910390f35b6100b060048036038101906100ab91906109b8565b61011f565b005b6100cc60048036038101906100c79190610abd565b610262565b005b6100e860048036038101906100e39190610c45565b610407565b005b61010460048036038101906100ff9190610c73565b610673565b005b600080823b905060008163ffffffff1611915050919050565b600081510361015a576040517ffd68e07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805b82518110156101e657600083828151811061017c5761017b610ca0565b5b6020026020010151602001519050600081036101c4576040517f2b82b70d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80836101d09190610cfe565b92505080806101de90610d32565b91505061015e565b506127108114610222576040517f0b8ad7f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60968251111561025e576040517f1531e37f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff16036102cc576040517f0809490800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561037d57503373ffffffffffffffffffffffffffffffffffffffff168260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b156103b4576040517fbe544a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4282600b01541015610403574282600b01546040517f0fe77d7d0000000000000000000000000000000000000000000000000000000081526004016103fa929190610d89565b60405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff1681602001516000015173ffffffffffffffffffffffffffffffffffffffff161415801561045a5750610458816020015160000151610106565b155b156104a4578060200151600001516040517f19bb402900000000000000000000000000000000000000000000000000000000815260040161049b9190610dc1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1681604001516000015173ffffffffffffffffffffffffffffffffffffffff16141580156104f757506104f5816040015160000151610106565b155b15610541578060400151600001516040517f19bb40290000000000000000000000000000000000000000000000000000000081526004016105389190610dc1565b60405180910390fd5b60008160a001511161057f576040517f5fe07c7d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105ea5750806060015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b15610621576040517f0809490800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b428160c001511015610670578060c00151426040517ff00605cf000000000000000000000000000000000000000000000000000000008152600401610667929190610d89565b60405180910390fd5b50565b3373ffffffffffffffffffffffffffffffffffffffff168160010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106fc576040517f978f045600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061073e82610713565b9050919050565b61074e81610733565b811461075957600080fd5b50565b60008135905061076b81610745565b92915050565b60006020828403121561078757610786610709565b5b60006107958482850161075c565b91505092915050565b60008115159050919050565b6107b38161079e565b82525050565b60006020820190506107ce60008301846107aa565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610822826107d9565b810181811067ffffffffffffffff82111715610841576108406107ea565b5b80604052505050565b60006108546106ff565b90506108608282610819565b919050565b600067ffffffffffffffff8211156108805761087f6107ea565b5b602082029050602081019050919050565b600080fd5b600080fd5b6000819050919050565b6108ae8161089b565b81146108b957600080fd5b50565b6000813590506108cb816108a5565b92915050565b6000604082840312156108e7576108e6610896565b5b6108f1604061084a565b90506000610901848285016108bc565b6000830152506020610915848285016108bc565b60208301525092915050565b600061093461092f84610865565b61084a565b9050808382526020820190506040840283018581111561095757610956610891565b5b835b81811015610980578061096c88826108d1565b845260208401935050604081019050610959565b5050509392505050565b600082601f83011261099f5761099e6107d4565b5b81356109af848260208601610921565b91505092915050565b6000602082840312156109ce576109cd610709565b5b600082013567ffffffffffffffff8111156109ec576109eb61070e565b5b6109f88482850161098a565b91505092915050565b6000819050919050565b610a1481610a01565b8114610a1f57600080fd5b50565b600081359050610a3181610a0b565b92915050565b6000819050919050565b610a4a81610a37565b8114610a5557600080fd5b50565b600081359050610a6781610a41565b92915050565b600060408284031215610a8357610a82610896565b5b610a8d604061084a565b90506000610a9d84828501610a58565b6000830152506020610ab18482850161075c565b60208301525092915050565b60008060608385031215610ad457610ad3610709565b5b6000610ae285828601610a22565b9250506020610af385828601610a6d565b9150509250929050565b600060408284031215610b1357610b12610896565b5b610b1d604061084a565b90506000610b2d8482850161075c565b6000830152506020610b41848285016108bc565b60208301525092915050565b610b568161079e565b8114610b6157600080fd5b50565b600081359050610b7381610b4d565b92915050565b60006101408284031215610b9057610b8f610896565b5b610b9b61010061084a565b90506000610bab84828501610a58565b6000830152506020610bbf84828501610afd565b6020830152506060610bd384828501610afd565b60408301525060a0610be78482850161075c565b60608301525060c0610bfb8482850161075c565b60808301525060e0610c0f848285016108bc565b60a083015250610100610c24848285016108bc565b60c083015250610120610c3984828501610b64565b60e08301525092915050565b60006101408284031215610c5c57610c5b610709565b5b6000610c6a84828501610b79565b91505092915050565b600060208284031215610c8957610c88610709565b5b6000610c9784828501610a22565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d098261089b565b9150610d148361089b565b9250828201905080821115610d2c57610d2b610ccf565b5b92915050565b6000610d3d8261089b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d6f57610d6e610ccf565b5b600182019050919050565b610d838161089b565b82525050565b6000604082019050610d9e6000830185610d7a565b610dab6020830184610d7a565b9392505050565b610dbb81610733565b82525050565b6000602082019050610dd66000830184610db2565b9291505056fea26469706673582212200bddaa8714e3bab279326036f3e4feb6e8380f94d563243d48855da49f31cf5f64736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }];
        readonly name: "InvalidContractAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "provided";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maximum";
            readonly type: "uint256";
        }];
        readonly name: "InvalidExpirationTime";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinimumBidLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReleasePercentage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTotalPercentage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "current";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiredTime";
            readonly type: "uint256";
        }];
        readonly name: "OrderAlreadyExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OverMaximumReleaseStep";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnauthorizedCancelAction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnauthorizedSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnauthorizedTakeAction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroReleaseSchedule";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "isContract";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uuid";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IAtomicSwapBase.Coin";
                readonly name: "sellToken";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IAtomicSwapBase.Coin";
                readonly name: "buyToken";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "maker";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "desiredTaker";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minBidAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expireAt";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "acceptBid";
                readonly type: "bool";
            }];
            readonly internalType: "struct IAtomicSwapBase.MakeSwapMsg";
            readonly name: "makeswap";
            readonly type: "tuple";
        }];
        readonly name: "validateMakeSwapParams";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "validateVestingParams";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): AtomicSwapMsgValidatorInterface;
    static connect(address: string, runner?: ContractRunner | null): AtomicSwapMsgValidator;
}
export {};
