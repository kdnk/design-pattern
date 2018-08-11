import { Factory } from "./Factory";
import { IDCardFactory } from "./IDCardFactory";
import { Product } from "./Product";

class Main {
  constructor() {
    const factory: Factory = new IDCardFactory();
    const card1: Product = factory.create("Nakamura");
    const card2: Product = factory.create("Momotaro");
    const card3: Product = factory.create("Urashimataro");
    card1.use();
    card2.use();
    card3.use();
  }
}

new Main();
