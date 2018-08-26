import Display from "./Display";
import Border from "./Border";

export default class SideBorder extends Border {
  private borderChar: string;
  constructor(display: Display, borderChar: string) {
    super(display);
    this.borderChar = borderChar;
  }

  public getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }

  public getRows(): number {
    return this.display.getRows();
  }

  public getRowText(row: number): string {
    return this.borderChar + this.display.getRowText(row) + this.borderChar;
  }
}
