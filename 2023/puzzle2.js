const fs = require("fs");

const input = fs.readFileSync("./puzzle2.txt", {
  encoding: "utf8",
  flag: "r",
});

//----PART ONE-----\\
const games = input.split("\n");

//remove the game and the number from the array
const numberedGames = games.map((g, i) => g.replace(`Game ${i + 1}:`, ""));

//split the values withe [games[sets[colors, number]]]
const gamesSplitted = numberedGames.map((game) =>
  game
    .split(";")
    .map((set) => set.split(",").map((color) => color.trim().split(" ")))
);

console.log(gamesSplitted);

//12 red cubes, 13 green cubes, and 14 blue
const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

//find colors in arrays
const result = gamesSplitted.map((game) =>
  game.some((set) => set.some(([number, color]) => limits[color] < number))
);

//turn boolean in the game id
let gamesPossible = [];
for (i = 0; i < result.length; i++) {
  if (!result[i]) {
    gamesPossible.push(i + 1);
  }
}
console.log(gamesPossible);

//sum of the games id
const sum = gamesPossible.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//----PART TWO-----\\

//Find the highest colors in each game [ [[x, red], [y, green], [z, blue]], [[x, red], [y, green], [z, blue]]]
const sortColors = (a, b) => {
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  return 0;
};

const highestColors = gamesSplitted.map((game) => game.flat().sort(sortColors));

console.log(highestColors);

//multiply colors for each set [xyz, xyz, xyz]

//sum of the results
