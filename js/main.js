console.log("new main working");

var $squares = $(".square");

var squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream2", "grumpy2", "happy2", "messy2", "slow2", "cheerful2", "bump2", "cool2", "wrong2", "topsyturvey2", "strong2", "missbossy2"];

var arrayCatcher = [];

var board = $("body #board");

//rehide function, score function (or Get winner)


function arrayMatch() {
  if (counter === 1) {
    return;
  } else if (arrayCatcher[0] === arrayCatcher[1]) {
    console.log("arrayMatch working");
    console.log("Match made!");
    return counter = 0;
  } else {
    console.log('NO match!');
    return counter = 0;
    //call the rehide function
  }
}


$squares.on("click", function() {
  console.log("#" + this.id);
  $(this).addClass(squareId[parseInt(this.id)]);
  arrayCatcher.push(squareId[parseInt(this.id)]);
  console.log(squareId[parseInt(this.id)]);
});



//if counter = 1
var counter = 0;

for (var i = 0; i < squareId.length; i++) {
  board.on("click", function() {
    if (counter < 2) {
      // arrayCatcher.push(elemn you click);
      counter++;
      arrayMatch();
    } else {
      arrayMatch();
    }
  });
}




function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Picks a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swaps it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(squareId);
console.log(squareId);