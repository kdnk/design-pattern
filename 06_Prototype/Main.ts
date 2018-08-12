import { Manager } from "./Manager";
import { UnderlinePen } from "./UnderlinePen";
import { MessageBox } from "./MessageBox";
import { Product } from "./Product";

class Main {
  constructor() {
    const manager: Manager = new Manager();
    const upen: UnderlinePen = new UnderlinePen("~");
    const mbox: MessageBox = new MessageBox("*");
    const sbox: MessageBox = new MessageBox("/");
    manager.register("strong message", upen);
    manager.register("warning box", mbox);
    manager.register("slash box", sbox);

    const p1: Product | null = manager.create("strong message");
    if (p1) {
      p1.use("Hello, World.");
    }
    const p2: Product | null = manager.create("warning box");
    if (p2) {
      p2.use("Hello, World.");
    }
    const p3: Product | null = manager.create("slash box");
    if (p3) {
      p3.use("Hello, World.");
    }
  }
}

new Main();
