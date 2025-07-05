import { v4 as uuidv4 } from "uuid";

function generateUniqueId(): string {
  return uuidv4();
}

export default class User {
  private id: string;
  private name: string;
  private accountIds: string[];

  constructor(id: string, name: string, accountIds: string[]) {
    this.name = name;
    this.id = id;
    this.accountIds = accountIds;
  }

  static create(name: string, accountIds: string[]): User {
    const id: string = generateUniqueId();
    return new User(id, name, accountIds);
  }

  getId(): string {
    return this.id;
  }
}
