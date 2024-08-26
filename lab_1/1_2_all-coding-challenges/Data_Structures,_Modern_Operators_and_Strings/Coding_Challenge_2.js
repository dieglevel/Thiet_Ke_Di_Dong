const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnabry",
    "Lewandowski",
    "Hummels",
  ],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let averageOdd = 0;
for (const odd of odds) {
  averageOdd += odd;
}
averageOdd /= odds.length;
console.log(`Average odd: ${averageOdd}`);

console.log(
  `Odd of victory ${game.team1}: ${game.odds.team1}`
);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(
  `Odd of victory ${game.team2}: ${game.odds.team2}`
);

const scorers = {};
for (const player of game.scored) {
  scorers[player]
    ? scorers[player]++
    : (scorers[player] = 1);
}
console.log(scorers);
