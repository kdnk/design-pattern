import { Display } from "./Display";
import { DisplayImpl } from "../implementation/DisplayImpl";

export class CountDisplay extends Display {
  constructor(impl: DisplayImpl) {
    super(impl);
  }

  public multiDisplay(times: number) {
    this.open();
    for (let i = 0; i < times; i++) {
      this.print();
    }
    this.close();
  }

  public randomDisplay(times: number) {
    const max = Math.floor(times);
    const t = Math.floor(Math.random() * max);
    this.multiDisplay(t);
  }

}
