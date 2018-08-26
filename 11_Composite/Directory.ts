import Entry from "./Entry";

export default class Directory extends Entry {
  private name: string;
  private directory: Array<Entry>;

  constructor(name: string) {
    super();
    this.name = name;
    this.directory = [];
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    let size: number = 0;
    this.directory.forEach(item => {
      size += item.getSize();
    });
    return size;
  }

  public add(entry: Entry) {
    this.directory.push(entry);
    return this;
  }

  public printListWithPrefix(prefix: string): void {
    console.log(`${prefix}/${this}`);
    this.directory.forEach(entry => {
      entry.printListWithPrefix(`${prefix}/${this.name}`);
    });
  }
}
