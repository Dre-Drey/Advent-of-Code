const fs = require("fs");

const input = fs.readFileSync("./5input.txt", { encoding: "utf8", flag: "r" });
const input2 = fs.readFileSync("./5.2input.txt", {
  encoding: "utf8",
  flag: "r",
});

//Récupérer les consignes
const input2Splitted = input2.split("\n");

console.log(input2Splitted);

//Récupérer les piles en tableaux
const getTheStacks = input.split("\n");

const dataParsed = getTheStacks
  .map((line) => line.replaceAll("   ", "*"))
  .map((line2) => line2.replaceAll(" ", ""))
  .map((line3) => line3.replaceAll("[", ""))
  .map((line4) => line4.replaceAll("]", ""))
  .map((character) => character.split(""));

const getTheData = (data) => {
  let theGreatArray = [];
  let array1 = [];
  let array2 = [];
  let array3 = [];
  for (let i = 0; i < data.length; i++) {
    array1.push(data[i][0]);
    array2.push(data[i][1]);
    array3.push(data[i][2]);
  }
  theGreatArray.push(array1.reverse(), array2.reverse(), array3.reverse());
  return theGreatArray;
};
console.log(getTheData(dataParsed));
