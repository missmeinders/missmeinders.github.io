console.log("new main working");

var $squares = $(".square");
// $squares is jquery for for the class square


//square id is an array that contains all the the subclass squares
var squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream2", "grumpy2", "happy2", "messy2", "slow2", "cheerful2", "bump2", "cool2", "wrong2", "topsyturvey2", "strong2", "missbossy2"];

//arrayCathcer is cathing my arrays which go into my arrayMatch function
var arrayCatcher = [];

// the board is my container for my header, table and squares (everything  minus score button)
var board = $("body #board");

// counter counts how many clicks take palce on the squares
var counter = 0;

//DO NOT UNDERSTAND - This is the rehide function. I called it in my arrayMatch function.
$("#hide").click(function() {
  $(squareId).hide();
});

//DO NOT UNDERSTAND - This is the score function.

$('#score-button').click(function() {
  // add 2 points
});

//arrayMatch function - this function incorporates the counter and connects the classes from
//arrayCathcher. Ideally if a match is made, then the score is recorded and the cards dissolve.
//if there is no match then the cards "rehide" and the counter resets.
//DOES NOT WORK: the rehide function, the counter, the no match, and the hide square.
function arrayMatch() {
  if (counter === 0) {
    return;
  } else if (arrayCatcher[0] === arrayCatcher[1]) {
    console.log("arrayMatch working");
    console.log("Match made!");
    return counter = 0;
    //call the score and dissolve functions
  } else {
    console.log('NO match!');
    return counter = 0;
    //call the rehide function
    hide(squareId);
  }
}

//this for loop takes squareID and triggers the arrayCatcher if the counter is less
//than 2.
for (var i = 0; i < squareId.length; i++) {
  board.on("click", function() {
    if (counter < 2) {
      arrayCatcher.push(squareId[parseInt(this.id)]);
      // arrayCatcher.push(element you click);
      counter++;
      arrayMatch();
    } else {
      arrayMatch();
    }
  });
}

//this function shuffles the array SquareId.
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

//this function callback shuffles the array squareId.
shuffle(squareId);
console.log(squareId);





//numMatchScore
//score
// on click handler, increment clicks; if its a hit it will incriment the click counter;
// numMatchScore (make that increment also)
// numMatchScore++;
// after each click on the buttom call a function called your scores,
// call it and then write it function numMatchScore (tallyScore) {};

// renderScores();
// function renderScores(){

// }