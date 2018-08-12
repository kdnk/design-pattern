export abstract class Builder {
  public abstract makeTitle(s: string): void;
  public abstract makeString(s: string): void;
  public abstract makeItems(items: string[]): void;
  public abstract close(): void;
}
