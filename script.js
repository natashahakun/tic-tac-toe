var board = document.getElementById("board");

for (i=0; i<9; i++) {
  var div = document.createElement("div");
  board.appendChild(div);
  div.className = "square";
  div.id = i+1;
}
