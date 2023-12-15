const fs = require("fs");

const input = fs.readFileSync("./puzzle3.txt", {
  encoding: "utf8",
  flag: "r",
});

const lines = input.split("\n");
console.log(lines);

//charact[0].length = 140, 139 indexes per line
const regDigit = /\d+/g; //regex pour match les digits de toute taille
const regSymbol = /\[(.*?)\]/;

const allNumbers = lines.map((line) => line.match(regSymbol));
console.log(allNumbers);
const numbersWithSymbol = lines.map((line) => allNumbers[line]);

// const charact = lines.map((line) => line.split(""));
// console.log(charact);

// for (let i = 0; i < charact.length; i++) {
//   for (let j = 0; j < charact[i].length; j++) {
//     if (charact[i][j].match(reg)) {
//       console.log(charact[i][j]);
//     }
//   }
// }
