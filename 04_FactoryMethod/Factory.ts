import { Product } from "./Product";

export abstract class Factory {
  public abstract createProduct(owner: string): Product;
  public abstract registerProduct(product: Product): void;
  public create(owner: string): Product {
    const p: Product = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
}
