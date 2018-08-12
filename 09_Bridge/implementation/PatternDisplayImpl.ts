import { DisplayImpl } from "./DisplayImpl";

export class PatternDisplayImpl extends DisplayImpl {
  private startStr: string;
  private str: string;
  private endStr: string;
  public constructor(startStr: string, str: string, endStr: string) {
    super();
    this.startStr = startStr;
    this.str = str;
    this.endStr = endStr;
  }

  public rawOpen() {
    process.stdout.write(this.startStr);
  }

  public rawPrint() {
    process.stdout.write(this.str);
  }

  public rawClose() {
    process.stdout.write(`${this.endStr}\n`);
  }
}
