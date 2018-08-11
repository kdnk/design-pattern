import { PrintBanner } from "./PrintBanner";
import { Adapter } from "./Print";

class Main {
  constructor() {
    const p: Adapter.Print = new PrintBanner("Hello");
    console.log(p.printWeak());
    console.log(p.printString());
  }
}

new Main();
