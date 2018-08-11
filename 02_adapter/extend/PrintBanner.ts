import { Banner } from "../Banner";
import { Adapter } from "./Print";

export class PrintBanner extends Banner implements Adapter.Print {
  constructor(str: string) {
    super(str);
  }
  public printWeak() {
    return this.showWithParen();
  }

  public printString() {
    return this.showWithAster();
  }
}
