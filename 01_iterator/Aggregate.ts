export namespace IteratorPattern {
  export interface Iterator {
    hasNext: () => boolean;
    next: () => Object;
  }

  export interface Aggregate {
    iterator: () => Iterator;
  }
}
