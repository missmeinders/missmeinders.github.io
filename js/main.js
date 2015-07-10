console.log("new main working");

var firstGuess, squareId, board, timer, score, $squares;

function init() {
  firstGuess = null;
  squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream2", "grumpy2", "happy2", "messy2", "slow2", "cheerful2", "bump2", "cool2", "wrong2", "topsyturvey2", "strong2", "missbossy2"];
  board = $("body #board");
  $squares = $(".square");

  //on click: X
  //this.id in the guessed array??????
  guessedArray.push(squareId[parseInt(this.id)]);
  // if (guessedArray.this.id || timer) return;

  //YES:
  //FIRSTGUESS??????
  //-show img - is this the firstGuess ??????

  $squares.on("click", function() {
    console.log("#" + this.id);
    $(this).addClass(squareId[parseInt(this.id)]);
    // arrayCatcher.push(squareId[parseInt(this.id)]);
    console.log(squareId[parseInt(this.id)]);
  });

  //FIRST GUESS-store this.id into first guess????
  this.id = firstGuess;


  //NO: X
  //determine if match
  if ($('#' + firstGuess).hasClass(squareId[parseInt(this.id)]))

  //YES:
  //-include score and update display (not now)

  //- fade both imgs: X
    $(squareId).fadeOut(1000);

  //- push both this.id into guessedArray: X
  guessedArray.push(squareId[parseInt(this.id)]);
  firstGuess = null;


  //NO: X
  var timer = setTimeout(function) {
      $('#' + firstGuess).removeClass(squareId[parseInt(firstGuess)]);
      firstGuess = null;
      timer = null;
    },
    1000);
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

init();