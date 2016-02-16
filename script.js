$(document).ready(function(){

  var board = $("#board");
  var squares = $(".square");

  function Player(name) {
    this.name = name;
  }

  $("#rules").on("click", "button", function(){
      newPlayerName();
      $(this).parent().hide();
      createBoard();
  });

  function newPlayerName(){
    var name = prompt("Please enter your name");
    // while (isNaN(name) === false || name === undefined) {
    //   name = prompt("Please enter your name");
    // }
    var playerOne = new Player(name);
    console.log(playerOne.name);
  }

  function createBoard(){
    for (i = 0; i < 3; i++) {
      $('<div class="col-xs-4 text-center square"></div>').appendTo('#row1');
      $('<div class="col-xs-4 text-center square"></div>').appendTo('#row2');
      $('<div class="col-xs-4 text-center square"></div>').appendTo('#row3');
    }
    $("#row1").addClass("row-border");
    $("#row2").addClass("row-border");
  }

  $("#board").on("click", ".square", function() {
    $(this).html("X");
  });


  // var takeTurn = function(square){
  //   square.className = square.className + " clicked";
  // };
  //
  // for (i=0; i<squares.length; i++) {
  //   var square = squares[i];
  //   square.onclick = "takeTurn(square)";
  // }
});
