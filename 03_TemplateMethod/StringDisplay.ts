import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private str: string;

  constructor(str: string) {
    super();
    this.str = str;
  }

  private printLine() {
    let str = "+";
    str += "-".repeat(this.str.length);
    str += "+";
    return str;
  }

  public open() {
    console.log(this.printLine());
  }

  public print() {
    console.log(`|${this.str}|`);
  }

  public close() {
    console.log(this.printLine());
  }
}
