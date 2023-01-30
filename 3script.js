const fs = require("fs");

const input = fs.readFileSync("./3input.txt", { encoding: "utf8", flag: "r" });

//Lister les strings
const stringUnits = input.split("\n");
console.log({ stringUnits });

//séparer les strings en 2
const stringSplitted = stringUnits.map((unit) => unit.split(""));
console.log({ stringSplitted });

const stringDivided = stringSplitted.map((unit) =>
  unit.splice(0, unit.length / 2)
);

console.log({ stringDivided });
console.log({ stringSplitted });

//Comparer stringDivided[0] avec stringSplitted[0] pour trouver le caractère commun
// const matchingCharacter = stringDivided[0].filter(
//   //filter retourne un nx tableau avec les element qui remplissent une condition
//   (character) => stringSplitted[0].indexOf(character) !== -1 //indexOf renvoie l'index ou on va trouver character, -1 = pas de présence.
// );
// console.log({ matchingCharacter });

//Comparer tout stringDivided avec tout stringSplitted
const matchingCharacter = stringDivided.forEach((arr) =>
  arr.filter((character) =>
    stringSplitted.forEach(
      (arr2) => arr2.indexOf(character) !== -1 //indexOf renvoie l'index ou on va trouver character.
    )
  )
);
console.log(matchingCharacter);
