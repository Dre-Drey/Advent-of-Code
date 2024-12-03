const fs = require("fs");

const input = fs.readFileSync("./puzzle4.txt", {
  encoding: "utf8",
  flag: "r",
});

const lines = input.split("\n");

const numbers = lines.map((line, index) =>
  line.replace(`Card   ${index + 1}: `, "")
);

const numbersType = numbers.map((line) => line.replace(/\s+/g, " "));

const winningNumbers = numbersType.map((line) =>
  line.split("|").map((x) => x.trim())
);

const individualNumbers = winningNumbers.map((array) =>
  array.map((x) => x.split(" "))
);

const flat = individualNumbers.flat();
console.log(flat);

const stringToNumbersSorted = flat.map((game) =>
  game.map((type) => parseInt(type)).sort((a, b) => a - b)
);
console.log(stringToNumbersSorted);

const match = stringToNumbersSorted[0].filter((val) =>
  stringToNumbersSorted[1].includes(val)
);
console.log(match);
