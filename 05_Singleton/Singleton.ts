export class Singleton {
  private static singleton: Singleton = new Singleton();
  private constructor() {
    console.log("Create instance.");
  }
  public static getInstance(): Singleton {
    return Singleton.singleton;
  }
}
