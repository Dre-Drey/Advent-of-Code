const fs = require("fs");

const input = fs.readFileSync("./puzzle1.txt", {
  encoding: "utf8",
  flag: "r",
});

// PART ONE :
// Splitter l'input en ligne et ne garder que les chiffres
const numbersList = input.split("\n").map((line) => line.replace(/\D/g, ""));

//Récupérer le 1er et le dernier nombre de chaque élément
const getCalibration = numbersList.map((calibration) => {
  if (calibration.length > 1) {
    return Number(calibration[0] + calibration[calibration.length - 1]);
  }
  return Number(calibration + calibration);
});

// //Faire la somme des calibrations
// const calibrationsSum = getCalibration.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(calibrationsSum);

//PART TWO
//Liste des chiffres écrits en lettres
const numbersInLetters = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "height",
  "nine",
];
const line = input.split("\n");
const getNumbers = line.map((line) =>
  [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]
    .map((match) => match[1])
    .map((n) => (/\d/.test(n) ? Number(n) : numbersInLetters.indexOf(n) + 1))
);
console.log(getNumbers);

const calibrations = getNumbers.map((number) => {
  if (number.length > 1) {
    return Number("" + number[0] + number[number.length - 1]);
  }
  return Number("" + number + number);
});
console.log(calibrations);

// //Faire la somme des calibrations
const calibrationsSum = calibrations.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(calibrationsSum);
