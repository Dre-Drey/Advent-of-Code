const fs = require("fs");

const input = fs.readFileSync("./4input.txt", { encoding: "utf8", flag: "r" });

//Créer un tableau avec les paires et les affectations
const paires = input.split("\n");
console.log({ paires });

const affectations = paires.map((sections) =>
  sections.split(",").map((item) => item.split("-").map((str) => parseInt(str)))
);
console.log({ affectations });

// const arrayBySections = [];
// for (let i = 0; i < affectations.length; i++) {
//   let sections = affectations[i].map((item) => item.split("-"));
//   arrayBySections.push(sections);
// }
console.log(affectations);

const result = affectations.map((ranges) => {
  if (
    (ranges[0][0] >= ranges[1][0] && ranges[0][0] <= ranges[1][1]) ||
    (ranges[0][1] >= ranges[1][0] && ranges[0][1] <= ranges[1][1]) ||
    (ranges[1][0] >= ranges[0][0] && ranges[1][0] <= ranges[0][1]) ||
    (ranges[1][1] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])
  ) {
    return 1;
  }
  return 0;
});

console.log(result);

console.log(
  "resultat = ",
  result.reduce((acc, curr) => acc + curr, 0)
);
