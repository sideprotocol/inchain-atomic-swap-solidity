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
    static readonly bytecode = "0x610e40610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c8063162790551461007157806333b988f5146100a15780637aa10b6a146100bd5780639a0ebe00146100d9578063c27eeaac146100f5578063c3aee15d14610111575b600080fd5b61008b600480360381019061008691906107b2565b61012d565b60405161009891906107fa565b60405180910390f35b6100bb60048036038101906100b691906109f9565b610146565b005b6100d760048036038101906100d29190610a78565b6102a1565b005b6100f360048036038101906100ee9190610c23565b6103db565b005b61010f600480360381019061010a9190610ca1565b610647565b005b61012b60048036038101906101269190610a78565b6106b4565b005b600080823b905060008163ffffffff1611915050919050565b6000815103610181576040517ffd68e07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805b82518110156102255760008382815181106101a3576101a2610cce565b5b602002602001015160200151905060008110806101cc57506000821180156101cb5750600081145b5b15610203576040517f2b82b70d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808361020f9190610d2c565b925050808061021d90610d60565b915050610185565b506127108114610261576040517f0b8ad7f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60968251111561029d576040517f1531e37f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415801561035257503373ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15610389576040517fbe544a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4281600b015410156103d85780600b0154426040517ff00605cf0000000000000000000000000000000000000000000000000000000081526004016103cf929190610db7565b60405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff1681602001516000015173ffffffffffffffffffffffffffffffffffffffff161415801561042e575061042c81602001516000015161012d565b155b15610478578060200151600001516040517f19bb402900000000000000000000000000000000000000000000000000000000815260040161046f9190610def565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1681604001516000015173ffffffffffffffffffffffffffffffffffffffff16141580156104cb57506104c981604001516000015161012d565b155b15610515578060400151600001516040517f19bb402900000000000000000000000000000000000000000000000000000000815260040161050c9190610def565b60405180910390fd5b60008160a0015111610553576040517f5fe07c7d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105be5750806060015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b156105f5576040517f0809490800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b428160c001511015610644578060c00151426040517ff00605cf00000000000000000000000000000000000000000000000000000000815260040161063b929190610db7565b60405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff16036106b1576040517f0809490800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b3373ffffffffffffffffffffffffffffffffffffffff168160010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461073d576040517f978f045600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061077f82610754565b9050919050565b61078f81610774565b811461079a57600080fd5b50565b6000813590506107ac81610786565b92915050565b6000602082840312156107c8576107c761074a565b5b60006107d68482850161079d565b91505092915050565b60008115159050919050565b6107f4816107df565b82525050565b600060208201905061080f60008301846107eb565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108638261081a565b810181811067ffffffffffffffff821117156108825761088161082b565b5b80604052505050565b6000610895610740565b90506108a1828261085a565b919050565b600067ffffffffffffffff8211156108c1576108c061082b565b5b602082029050602081019050919050565b600080fd5b600080fd5b6000819050919050565b6108ef816108dc565b81146108fa57600080fd5b50565b60008135905061090c816108e6565b92915050565b600060408284031215610928576109276108d7565b5b610932604061088b565b90506000610942848285016108fd565b6000830152506020610956848285016108fd565b60208301525092915050565b6000610975610970846108a6565b61088b565b90508083825260208201905060408402830185811115610998576109976108d2565b5b835b818110156109c157806109ad8882610912565b84526020840193505060408101905061099a565b5050509392505050565b600082601f8301126109e0576109df610815565b5b81356109f0848260208601610962565b91505092915050565b600060208284031215610a0f57610a0e61074a565b5b600082013567ffffffffffffffff811115610a2d57610a2c61074f565b5b610a39848285016109cb565b91505092915050565b6000819050919050565b610a5581610a42565b8114610a6057600080fd5b50565b600081359050610a7281610a4c565b92915050565b600060208284031215610a8e57610a8d61074a565b5b6000610a9c84828501610a63565b91505092915050565b6000819050919050565b610ab881610aa5565b8114610ac357600080fd5b50565b600081359050610ad581610aaf565b92915050565b600060408284031215610af157610af06108d7565b5b610afb604061088b565b90506000610b0b8482850161079d565b6000830152506020610b1f848285016108fd565b60208301525092915050565b610b34816107df565b8114610b3f57600080fd5b50565b600081359050610b5181610b2b565b92915050565b60006101408284031215610b6e57610b6d6108d7565b5b610b7961010061088b565b90506000610b8984828501610ac6565b6000830152506020610b9d84828501610adb565b6020830152506060610bb184828501610adb565b60408301525060a0610bc58482850161079d565b60608301525060c0610bd98482850161079d565b60808301525060e0610bed848285016108fd565b60a083015250610100610c02848285016108fd565b60c083015250610120610c1784828501610b42565b60e08301525092915050565b60006101408284031215610c3a57610c3961074a565b5b6000610c4884828501610b57565b91505092915050565b600060408284031215610c6757610c666108d7565b5b610c71604061088b565b90506000610c8184828501610ac6565b6000830152506020610c958482850161079d565b60208301525092915050565b600060408284031215610cb757610cb661074a565b5b6000610cc584828501610c51565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d37826108dc565b9150610d42836108dc565b9250828201905080821115610d5a57610d59610cfd565b5b92915050565b6000610d6b826108dc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d9d57610d9c610cfd565b5b600182019050919050565b610db1816108dc565b82525050565b6000604082019050610dcc6000830185610da8565b610dd96020830184610da8565b9392505050565b610de981610774565b82525050565b6000602082019050610e046000830184610de0565b9291505056fea2646970667358221220c70af5feb264606605433634dd2035211b00f3231619c341d38e681c530d94a764736f6c63430008140033";
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
                readonly internalType: "bytes32";
                readonly name: "orderID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "takerReceiver";
                readonly type: "address";
            }];
            readonly internalType: "struct IAtomicSwapBase.TakeSwapMsg";
            readonly name: "takeswap";
            readonly type: "tuple";
        }];
        readonly name: "validateTakeSwapParams";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
