import { TextBuilder } from "./TextBuilder";
import { Director } from "./Director";

if (process.argv.length != 3) {
  console.log(process.argv.length);
  console.warn("Wrong usage.");
}
if (process.argv[2] == "plain") {
  const textbuilder: TextBuilder = new TextBuilder();
  const director: Director = new Director(textbuilder);
  director.construct();
  const result: string = textbuilder.getResult();
  console.log(result);
}
