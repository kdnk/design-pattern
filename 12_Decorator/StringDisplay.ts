import Display from "./Display";

export default class StringDisplay extends Display {
  private str: string;
  constructor(str: string) {
    super();
    this.str = str;
  }

  public getColumns(): number {
    return this.str.length;
  }

  public getRows(): number {
    return 1;
  }

  public getRowText(row: number): string {
    if (row == 0) {
      return this.str;
    } else {
      return "";
    }
  }
}
