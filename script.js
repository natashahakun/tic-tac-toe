var board = document.getElementById("board");

for (i=0; i<9; i++) {
  var div = document.createElement("div");
  board.appendChild(div);
  div.className = "square";
  div.id = i+1;
}

var Player = function(firstName, lastName){
};

var playerOne = new Player();
var playerTwo = new Player();

playerOne.firstName = prompt("Player One, what is your name?");
playerTwo.firstName = prompt("Player Two, what is your name?");

alert("Welcome " + playerOne.firstName + " and " + playerTwo.firstName + "!");
