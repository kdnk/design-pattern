import Display from "./Display";
import Border from "./Border";

export default class FullBorder extends Border {
  constructor(display: Display) {
    super(display);
  }

  public getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }

  public getRows(): number {
    return 1 + this.display.getRows() + 1;
  }

  public getRowText(row: number): string {
    if (row == 0) {
      return "+" + this.makeLine("-", this.display.getColumns()) + "+";
    } else if (row == this.display.getRows() + 1) {
      return "+" + this.makeLine("-", this.display.getColumns()) + "+";
    } else {
      return "|" + this.display.getRowText(row - 1) + "|";
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
