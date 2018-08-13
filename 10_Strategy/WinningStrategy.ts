import { Strategy } from "./Strategy";
import { Hand } from "./Hand";

export class WinningStrategy implements Strategy {
  private won: boolean = false;
  private prevHand: Hand | null = null;

  public nextHand(): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(this.randomForHand());
    }
    return this.prevHand!;
  }

  public study(win: boolean): void {
    this.won = win;
  }

  private randomForHand(): number {
    const h = Math.floor(Math.random() * 3);
    return h;
  }
}
