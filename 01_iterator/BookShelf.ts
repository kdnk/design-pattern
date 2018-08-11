import { IteratorPattern } from "./Aggregate";
import { Book } from "./Book";
import { BookShelfIterator } from "./BookShelfIterator";

export class BookShelf implements IteratorPattern.Aggregate {
  private books: Book[];
  private last: number = 0;

  constructor(maxsize: number) {
    this.books = [];
  }

  public getBookAt(index: number): Book {
    return this.books[index];
  }

  public appendBook(book: Book) {
    this.books.push(book);
    this.last++;
  }

  public getLength() {
    return this.last;
  }

  public iterator(): IteratorPattern.Iterator {
    return new BookShelfIterator(this);
  }
}
