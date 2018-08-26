import Display from "./Display";
import StringDisplay from "./StringDisplay";
import SideBorder from "./SideBorder";
import FullBorder from "./FullBorder";

// 飾り枠と中身の同一視
// スポンジケーキ、ショートケーキ、ストロベリーショートケーキ、バースデーケーキ

class Main {
  constructor() {
    const b1: Display = new StringDisplay("Hello, world.");
    const b2: Display = new SideBorder(b1, "#");
    const b3: Display = new FullBorder(b2);
    b1.show();
    b2.show();
    b3.show();
    const b4: Display = new SideBorder(
      new FullBorder(
        new FullBorder(
          new SideBorder(new FullBorder(new StringDisplay("Hello")), "*")
        )
      ),
      "/"
    );
    b4.show();
  }
}

new Main();
