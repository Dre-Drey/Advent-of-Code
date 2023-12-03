const fs = require("fs");

const input = fs.readFileSync("./2input.txt", { encoding: "utf8", flag: "r" });

const rounds = input.split("\n");
console.log({ rounds });

const dictionary = {
  X: 0,
  Y: 3,
  Z: 6,
};

// const hands = ["X", "Y", "Z"];
const parsedRounds = rounds.map(
  (round) => round.split(" ").map((hand) => dictionary[hand])
  //   round.split(" ").map((hand) => hands.indexOf((value) => value === hand) + 1)
);

let handScore = 0;
parsedRounds.forEach((game) => (handScore += game[1]));
console.log({ handScore });

const getResult = (hand, opposite) => {
  switch (hand) {
    case "X":
      switch (opposite) {
        case "A":
          //   return 3;
          return 3;
        case "B":
          //   return 0;
          return 1;
        case "C":
          //   return 6;
          return 2;
      }
    case "Y":
      switch (opposite) {
        case "A":
          //   return 6;
          return 1;
        case "B":
          //   return 3;
          return 2;
        case "C":
          //   return 0;
          return 3;
      }
    case "Z":
      switch (opposite) {
        case "A":
          //   return 0;
          return 2;
        case "B":
          //   return 6;
          return 3;
        case "C":
          //   return 3;
          return 1;
      }
  }
};

const parsedRounds2 = rounds.map((round) => {
  const game = round.split(" ");
  const result = getResult(game[1], game[0]);
  return result;
});
console.log({ parsedRounds2 });

// const winSum = parsedRounds2.reduce((acc, value) => acc + value, 0);
const winSum = (array, arraylenght) => {
  if (arraylenght <= 0) {
    return 0;
  }
  return winSum(array, arraylenght - 1) + array[arraylenght - 1];
};

const finalResult = winSum(parsedRounds2, parsedRounds2.length) + handScore;

console.log({ finalResult });
