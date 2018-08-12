import { Product } from "./Product";
import process from "process";

export class UnderlinePen implements Product {
  private urlchar: string;
  constructor(ulchar: string) {
    this.urlchar = ulchar;
  }

  public use(s: string): void {
    const length: number = s.length;
    process.stdout.write(`"${s}"\n`);
    process.stdout.write(" ");
    for (let i = 0; i < length; i++) {
      process.stdout.write(this.urlchar);
    }
    process.stdout.write("\n");
  }

  public createClone(): Product | null {
    let p: Product | null = null;
    try {
      p = Object.assign(
        Object.create(Object.getPrototypeOf(this)),
        this
      ) as Product;
    } catch (e) {
      console.log(e);
    }
    return p;
  }
}
