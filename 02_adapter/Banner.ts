export class Banner {
  private str: String;

  constructor(str: string) {
    this.str = str;
  }
  public showWithParen() {
    return `(${this.str})`;
  }
  public showWithAster() {
    return `*${this.str}*`;
  }
}
