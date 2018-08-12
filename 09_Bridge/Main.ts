import { Display } from "./function/Display";
import { StringDisplayImpl } from "./implementation/StringDisplayImpl";
import { CountDisplay } from "./function/CountDisplay";
import { DisplayImpl } from "./implementation/DisplayImpl";

class Main {
  public constructor() {
    const d1: Display = new Display(new StringDisplayImpl("Hello, Japan."));
    const d2: Display = new Display(new StringDisplayImpl("Hello, World."));
    const d3: CountDisplay = new CountDisplay(
      new StringDisplayImpl("Hello, Universe.")
    );

    d1.display();
    d2.display();
    d3.display();
    d3.multiDisplay(5);
    d3.randomDisplay(5);
  }
}

new Main();
