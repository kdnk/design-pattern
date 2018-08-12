import { Product } from "./Product";

export class Manager {
  private showcase = {};

  public register(name: string, proto: Product) {
    this.showcase[name] = proto;
  }

  public create(protoname: string): Product | null {
    const p: Product = this.showcase[protoname] as Product;
    if (!p) {
      return null;
    }
    return p.createClone();
  }
}
