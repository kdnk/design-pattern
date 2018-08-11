import { IteratorPattern } from "./Aggregate";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";

class Main {
  constructor() {
    const bookShelf: BookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("Around the world in 80 days"));
    bookShelf.appendBook(new Book("Bible"));
    bookShelf.appendBook(new Book("Cinderella"));
    bookShelf.appendBook(new Book("Daddy-Long-Legs"));
    const it: IteratorPattern.Iterator = bookShelf.iterator();
    while (it.hasNext()) {
      const book = it.next() as Book;
      console.log(book.getName());
    }
  }
}

const main = new Main();
