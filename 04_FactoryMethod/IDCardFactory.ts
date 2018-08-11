import { Factory } from "./Factory";
import { Product } from "./Product";
import { IDCard } from "./IDCard";

export class IDCardFactory extends Factory {
  private owners: string[] = [];
  public createProduct(owner: string): Product {
    return new IDCard(owner);
  }
  public registerProduct(product: Product): void {
    this.owners.push((product as IDCard).getOwner());
  }

  public getOwners() {
    return this.owners;
  }
}
