import { DisplayImpl } from "./DisplayImpl";

export class StringDisplayImpl extends DisplayImpl {
  private str: string;
  private width: number;

  public constructor(str: string) {
    super();
    this.str = str;
    this.width = this.str.length;
  }

  public rawOpen(): void {
    this.printLine();
  }

  public rawPrint(): void {
    process.stdout.write(`|${this.str}|\n`);
  }

  public rawClose(): void {
    this.printLine();
  }

  private printLine(): void {
    process.stdout.write("+");
    for (let i = 0; i < this.width; i++) {
      process.stdout.write("-");
    }
    process.stdout.write("+\n");
  }
}
