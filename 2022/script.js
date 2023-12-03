const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf8", flag: "r" });

function sum(calorieArray) {
  let result = 0;
  for (let i = 0; i < calorieArray.length; i++) {
    result += calorieArray[i];
  }
  return result;
}

premierArray = input.split("\n\n");
console.log({ premierArray });

const elfsCal = premierArray.map((arrayItem) => {
  splittedElfCal = arrayItem.split("\n");
  const parsedArray = splittedElfCal.map((elfCal) => parseInt(elfCal));
  const totalCal = sum(parsedArray);
  return totalCal;
});

let maxCalory = 0;
let maxCalIndex = 0;
elfsCal.forEach((calory, index) => {
  if (maxCalory < calory) {
    maxCalory = calory;
    maxCalIndex = index;
  }
});

console.log({ maxCalory, maxCalIndex });

console.log(sum(elfsCal.sort().reverse().slice(0, 3)));
