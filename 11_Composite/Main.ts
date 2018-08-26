// 容器と中身を同じ種類のものとして扱うデザインパターン

import Directory from "./Directory";
import CFile from "./File";

class Main {
  constructor() {
    try {
      console.log("Making root entries...");
      const rootdir: Directory = new Directory("root");
      const bindir: Directory = new Directory("bin");
      const tmpdir: Directory = new Directory("tmp");
      const usrdir: Directory = new Directory("usr");
      rootdir.add(bindir);
      rootdir.add(tmpdir);
      rootdir.add(usrdir);
      bindir.add(new CFile("vi", 10000));
      bindir.add(new CFile("latex", 20000));
      rootdir.printList();

      console.log("");
      console.log("Making user entries...");
      const yuki: Directory = new Directory("yuki");
      const hanako: Directory = new Directory("hanako");
      const tomura: Directory = new Directory("tomura");
      usrdir.add(yuki);
      usrdir.add(hanako);
      usrdir.add(tomura);
      yuki.add(new CFile("dirary.html", 100));
      yuki.add(new CFile("Composite.java", 200));
      hanako.add(new CFile("memo.tex", 300));
      tomura.add(new CFile("game.doc", 400));
      tomura.add(new CFile("junk.mail", 500));
      rootdir.printList();
    } catch (e) {
      console.log(e);
    }
  }
}

new Main();
