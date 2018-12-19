// Business Logic
function roll() {
  return Math.floor(6 * Math.random()) + 1;
}
var playerRoll = 0;
  var playerRoll1 = 0;
  var player;
  var total = 0;
  var myTurn1 = 0;
  var myTurn2 = 0;
  var player1Total = 0;
  var player2Total = 0;

  function rollNunber() {
    playerRoll = roll();
    if (playerRoll === 1) {
      playerRoll = 0;
      alert("Rolled 1 your score is 0, " + player + " turn.");
    }
  };
