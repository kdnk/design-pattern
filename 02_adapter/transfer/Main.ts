import { PrintBanner } from "./PrintBanner";
import { Print } from "./Print";

class Main {
  constructor() {
    const p: Print = new PrintBanner("Hello");
    console.log(p.printWeak());
    console.log(p.printString());
  }
}

new Main();
