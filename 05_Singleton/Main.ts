import { Singleton } from "./Singleton";

class Main {
  constructor() {
    console.log("start.");
    const obj1: Singleton = Singleton.getInstance();
    const obj2: Singleton = Singleton.getInstance();
    if (obj1 === obj2) {
      console.log("same instance.");
    } else {
      console.log("not same instance.");
    }
    console.log("end.");
  }
}

new Main();
