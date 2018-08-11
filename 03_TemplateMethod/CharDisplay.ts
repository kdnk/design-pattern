import { AbstractDisplay } from "./AbstractDisplay";
import process from "process";

export class CharDisplay extends AbstractDisplay {
  private char: string;

  constructor(char: string) {
    super();
    this.char = char;
  }

  public open() {
    process.stdout.write("<<");
  }

  public print() {
    process.stdout.write(this.char);
  }

  public close() {
    process.stdout.write(">>\n");
  }
}
