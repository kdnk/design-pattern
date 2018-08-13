export class Hand {
  public static HANDVALUE_GUU: number = 0;
  public static HANDVALUE_CHO: number = 1;
  public static HANDVALUE_PAA: number = 2;
  public static hand: Hand[] = [
    new Hand(Hand.HANDVALUE_GUU),
    new Hand(Hand.HANDVALUE_CHO),
    new Hand(Hand.HANDVALUE_PAA)
  ];
  private static title: string[] = ["グー", "チョキ", "パー"];
  private handValue: number;
  private constructor(handValue: number) {
    this.handValue = handValue;
  }

  public static getHand(handValue: number): Hand {
    return this.hand[handValue];
  }

  public isStrongerThan(h: Hand) {
    return this.fight(h) == 1;
  }
  public isWeakerThan(h: Hand) {
    return this.fight(h) == -1;
  }

  public fight(h: Hand): number {
    if (this == h) {
      return 0;
    } else if ((this.handValue + 1) % 3 == h.handValue) {
      return 1;
    } else {
      return -1;
    }
  }

  public toString(): string {
    return Hand.title[this.handValue];
  }
}
