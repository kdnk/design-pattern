import { CharDisplay } from "./CharDisplay";
import { AbstractDisplay } from "./AbstractDisplay";
import { StringDisplay } from "./StringDisplay";

class Main {
  constructor() {
    const d1: AbstractDisplay = new CharDisplay("H");
    const d2: AbstractDisplay = new StringDisplay("Hello, World");
    d1.display();
    d2.display();
  }
}

new Main();
