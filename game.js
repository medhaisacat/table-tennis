const { Player } = require("./player");
const { Scoreboard } = require("./scoreboard");

let playerA = new Player("A");
let playerB = new Player("B");
let scoreboard = new Scoreboard(playerA, playerB);

scoreboard.play();