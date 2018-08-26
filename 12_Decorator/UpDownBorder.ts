import Border from "./Border";
import Display from "./Display";

export default class UpDownBorder extends Border {
  private char: string;

  public constructor(display: Display, char: string) {
    super(display);
    this.char = char;
  }

  public getColumns() {
    return this.display.getColumns();
  }

  public getRows() {
    return 1 + this.display.getRows() + 1;
  }

  public getRowText(row: number): string {
    if (row == 0 || row == this.display.getRows() + 1) {
      return this.makeLine(this.char, this.display.getColumns());
    } else {
      return this.display.getRowText(row - 1);
    }
  }

  private makeLine(chr: string, count: number) {
    let str = "";
    for (let i = 0; i < count; i++) {
      str += chr;
    }
    return str;
  }
}
