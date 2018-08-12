import { Display } from "./function/Display";
import { StringDisplayImpl } from "./implementation/StringDisplayImpl";
import { CountDisplay } from "./function/CountDisplay";
import { PatternDisplayImpl } from "./implementation/PatternDisplayImpl";

class Main {
  public constructor() {
    const d1: Display = new Display(new StringDisplayImpl("Hello, Japan."));
    const d2: Display = new Display(new StringDisplayImpl("Hello, World."));
    const d3: CountDisplay = new CountDisplay(
      new StringDisplayImpl("Hello, Universe.")
    );
    const d4: CountDisplay = new CountDisplay(
      new PatternDisplayImpl("<", "*", ">")
    );

    const d5: CountDisplay = new CountDisplay(
      new PatternDisplayImpl("|", "#", "-")
    );

    d1.display();
    d2.display();
    d3.display();
    d3.multiDisplay(5);
    d3.randomDisplay(5);
    d4.incrementDisplay(4);
    d5.incrementDisplay(6);
  }
}

new Main();
