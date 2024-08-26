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

// 1. Create player arrays for each team
const [players1, players2] = game.players;

// 2. Extract the goalkeeper and field players for Bayern Munich
const [gk, ...fieldPlayers] = players1;

// 3. Create an array containing all players from both teams
const allPlayers = [...players1, ...players2];

// 4. Create a new array for Bayern Munich including substitute players
const players1Final = [
  ...players1,
  "Thiago",
  "Coutinho",
  "Perisic",
];

// 5. Extract the odds for each outcome
const { team1, draw, team2 } = game.odds;

// 6. Write a function to print player names and the total number of goals
function printGoals(...players) {
  console.log(
    `${players.length} goals were scored by:`
  );
  players.forEach((player) =>
    console.log(player)
  );
}

// Test data for printGoals function
printGoals(
  "Davies",
  "Muller",
  "Lewandowski",
  "Kimmich"
);
printGoals(...game.scored);

// 7. Determine and print which team is more likely to win based on the odds
team1 < team2 &&
  console.log("Team 1 is more likely to win");
team2 < team1 &&
  console.log("Team 2 is more likely to win");
