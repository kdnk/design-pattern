export default abstract class Entry {
  public abstract getName(): string;
  public abstract getSize(): number;
  public add(entry: Entry) {
    throw new FileTreatmentException();
  }
  public printList(): void {
    this.printListWithPrefix("");
  }
  public abstract printListWithPrefix(prefix: string);
  public toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}
