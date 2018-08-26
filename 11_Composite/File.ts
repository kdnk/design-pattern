import Entry from "./Entry";
export default class CFile extends Entry {
  private name: string;
  private size: number;

  public constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public printListWithPrefix(prefix: string) {
    console.log(prefix + "/" + this);
  }
}
