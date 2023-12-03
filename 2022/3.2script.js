const fs = require("fs");

const input = fs.readFileSync("./3input.txt", { encoding: "utf8", flag: "r" });

//Lister les strings
const stringUnits = input.split("\n");
console.log({ stringUnits });

//séparer les strings en 2
// const tuppleArray = stringUnits.map((str) => [
//   str.slice(0, str.length / 2),
//   str.slice(str.length / 2, str.length),
// ]);

// console.log({ tuppleArray });

//Grouper les strings par 3
const size = 3;
const arrayByThree = [];

for (let i = 0; i < stringUnits.length; i += size) {
  let stringsByThree = stringUnits.slice(i, i + size);
  arrayByThree.push(stringsByThree);
}

console.log({ arrayByThree });

//Trouver le caractère commun entre les 3 strings
const matchingCharacters = arrayByThree.map((array) => {
  const firstItemAsArray = array[0].split("");
  console.log({ firstItemAsArray });
  const matchingLetter = firstItemAsArray.filter(
    (letter) => array[1].includes(letter) && array[2].includes(letter)
  );
  console.log({ matchingLetter });
  return matchingLetter[0];
});

//Trouver le caractère commun entre les 2 parties du string
// const matchingCharacters = tuppleArray.map((tuple) => {
//   const firstItemAsArray = tuple[0].split("");
//   const matchingLetter = firstItemAsArray.filter((letter) =>
//     tuple[1].includes(letter)
//   );
//   return matchingLetter[0];
// });

//Calculer la valeur des lettres communes
const lettersToAmount = matchingCharacters.map((letter) => {
  const code = letter.charCodeAt(0);
  if (code > 96) {
    return code - 96;
  }
  return code - 38;
});

const sum = lettersToAmount.reduce((acc, curr) => acc + curr, 0);

console.log({ lettersToAmount, sum });
