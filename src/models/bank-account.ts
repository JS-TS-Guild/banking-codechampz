import { v4 as uuidv4 } from "uuid";
import Bank from "@/models/bank";

function generateId(): string {
  return uuidv4();
}

export default class Account {
  private readonly id: string;
  private balance: number;
  private readonly bank: Bank;

  constructor(id: string, balance: number, bank: Bank) {
    this.id = id;
    this.balance = balance;
    this.bank = bank;
  }

  static create(bank: Bank, initialBalance: number): Account {
    const id = generateId();

    if (initialBalance < 0 && !bank.getAllowNegativeBalance()) {
      throw new Error("Cannot create account with negative balance");
    }

    return new Account(id, initialBalance, bank);
  }

  withraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("withraw amount must be positive");
    }

    if (this.balance - amount < 0 && !this.bank.getAllowNegativeBalance()) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }

    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }

  getId(): string {
    return this.id;
  }

  getBank(): Bank {
    return this.bank;
  }
}
