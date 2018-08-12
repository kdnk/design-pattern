import { Product } from "./Product";
import process from "process";

export class MessageBox implements Product {
  private decochar: string;

  constructor(decochar: string) {
    this.decochar = decochar;
  }

  public use(s: string): void {
    const length: number = s.length;
    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
    }
    process.stdout.write("\n");
    process.stdout.write(`${this.decochar} ${s} ${this.decochar}\n`);
    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decochar);
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
