const fs = require("fs");

const input = fs.readFileSync("./puzzle2.txt", {
  encoding: "utf8",
  flag: "r",
});

const games = input.split("\n");
console.log(games);

const numberedGames = games.map((g, i) => g.replace(`Game ${i + 1}:`, ""));
console.log(numberedGames);
const gamesSplitted = numberedGames.map((game) =>
  game.split(";").map((g) => g.split(",").map((k) => k.trim().split(" ")))
);
console.log(gamesSplitted);

//12 red cubes, 13 green cubes, and 14 blue
const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

const result = gamesSplitted.map((game) =>
  game.some((set) =>
    set.some(([numberStr, color]) => limits[color] < numberStr)
  )
);
console.log(result);

// tuple = [6,blue]
// console.log(JSON.stringify(gamesSplitted, null, 1));
