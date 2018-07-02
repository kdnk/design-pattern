namespace IteratorPattern {
  export interface Iterator {
    hasNext: () => boolean;
    next: () => Object;
  }

  // 集合に対応するIteratorをつくる
  export interface Aggregate {
    iterator: Iterator;
  }
}

class Book {
  private name: String;
  public constructor(name: String) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
}

class BookShelf {
  private books: Book[];
  private last: number;
  public constructor(maxsize: number) {
    this.books = [];
  }

  public getBookAt(index: number) {
    return this.books[index];
  }

  public appendBook(book: Book) {
    this.books[this.last] = book;
  }
  public getLength() {
    return this.last;
  }
}

class BookShelfIterator implements IteratorPattern.Iterator {
  private bookshelf: BookShelf;
  private index: number;

  public constructor(bookshelf: BookShelf) {
    this.bookshelf = bookshelf;
    this.index = 0;
  }

  public hasNext() {
    if (this.index < this.bookshelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }

  public next() {
    const book: Book = this.bookshelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
