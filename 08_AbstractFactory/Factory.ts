export abstract class Factory {
  public static getFactory(classname: string) {
    const factory: Factory = null;
    try {
    } catch (e) {
      console.log(`クラス${classname}が見つかりません。`);
    }
    return factory;
  }
}
