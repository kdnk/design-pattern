import { Builder } from "./Builder";

export class TextBuilder extends Builder {
  private str: string = "";

  public makeTitle(title: string): void {
    this.str += "=======================\n";
    this.str += `「${title}」\n`;
    this.str += "\n";
  }

  public makeString(str: string) {
    this.str += `■${str}\n`;
    this.str += "\n";
  }

  public makeItems(items: string[]) {
    for (let i = 0; i < items.length; i++) {
      this.str += `・${items[i]}\n`;
      this.str += "\n";
    }
  }

  public close(): void {
    this.str += "=======================\n";
  }

  public getResult(): string {
    return this.str;
  }
}
