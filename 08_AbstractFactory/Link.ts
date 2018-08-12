import { Item } from "./Item";

export abstract class Link extends Item {
  protected url: string;
  public constructor(caption: string, url: string) {
    super(caption);
    this.url = url;
  }
}
