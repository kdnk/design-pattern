import { Banner } from "../Banner";
import { Print } from "./Print";

export class PrintBanner extends Print {
  private banner: Banner;

  constructor(str: string) {
    super();
    this.banner = new Banner(str);
  }

  public printWeak() {
    return this.banner.showWithParen();
  }

  public printString() {
    return this.banner.showWithAster();
  }
}
