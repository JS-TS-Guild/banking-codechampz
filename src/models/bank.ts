import { v4 as uuidv4 } from "uuid";
import Account from "@/models/bank-account";

function generateId(): string {
  return uuidv4();
}

export default class Bank {
  private readonly bankId: string;
  private readonly bankName: string;
  private readonly allowNegativeBalance: boolean;

  constructor(bankId: string, bankName: string, allowNegativeBalance = false) {
    this.bankId = bankId;
    this.bankName = bankName;
    this.allowNegativeBalance = allowNegativeBalance;
  }

  static create(
    options?: { isNegativeAllowed?: boolean },
    bankName = "BankName"
  ): Bank {
    const bankId: string = generateId();
    const isNegativeAllowed = options?.isNegativeAllowed ?? false;
    return new Bank(bankId, bankName, isNegativeAllowed);
  }

  createAccount(initialBalance: number): Account {
    return Account.create(this, initialBalance);
  }

  getId(): string {
    return this.bankId;
  }

  getName(): string {
    return this.bankName;
  }

  // getAccount(): string {
  //   return this.getId();
  // }

  getAllowNegativeBalance(): boolean {
    return this.allowNegativeBalance;
  }
}
