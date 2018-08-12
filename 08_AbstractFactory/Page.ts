import { Item } from "./Item";
import fs from "fs";

export abstract class Page {
  protected title: string;
  protected author: string;
  protected content: Item[];

  public abstract makeHTML(): string;

  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public add(item: Item) {
    this.content.push(item);
  }

  public output(): void {
    try {
      const filename: string = `${this.title}.html`;
      fs.writeFileSync(filename, this.makeHTML());
    } catch (e) {
      console.log(e);
    }
  }
}
