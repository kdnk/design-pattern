import { IteratorPattern } from "./Aggregate";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

export class BookShelfIterator implements IteratorPattern.Iterator {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  public hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }

  public next(): Object {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
