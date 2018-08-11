import { Product } from "./Product";

export class IDCard extends Product {
  private owner: string;

  constructor(owner: string) {
    super();
    console.log(owner + "のカードを作ります");
    this.owner = owner;
  }

  public use() {
    console.log(this.owner + "のカードを使います");
  }

  public getOwner(): string {
    return this.owner;
  }
}
