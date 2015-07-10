console.log("new main working");

var firstGuess, squareId, board, timer, score, $squares, guessedArray, counter, matchedDivIds, first, second;

function init() {
  firstGuess = null;
  counter = 0;
  squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy"];
  board = $("body #board");
  $squares = $(".square");
  guessedArray = [];
  matchedDivIds = [];
  first, second;


  //this is jquery, and activates the class squares on click
  $squares.on("click", function(event) {

    //this is the counter function and prompts my counter
    counter++;

    //this add's class squareId to this (where you are)
    $(this).addClass(squareId[parseInt(this.id)]);

    //this pushes squareId into the gussedArray container
    guessedArray.push(squareId[parseInt(this.id)]);
    console.log(guessedArray);

    //pushes matchedDivIds into a relative id
    matchedDivIds.push(event.target.id);

    //makes first counter absolutely equal to 1, and abolutely equal to 2.
    if (counter === 1) {
      first = this.id;

      // counter = 2
    } else {
      second = this.id;

      // reset counter
      counter = 0;

      //this if statement tells the guessedArrays to match
      if (guessedArray[0] === guessedArray[1]) {
        console.log("match");
        guessedArray = [];
        first = null;
        second = null;
      } else {

        //this else, in the if statement tells us that the cards don't match
        console.log("no match");
        console.log(first, second);
        guessedArray = [];
        setTimeout(function() {
          $('#' + first).removeClass(squareId[first]);
          $('#' + second).removeClass(squareId[second]);
        }, 900);
      }
    }

    //this stuff doesn't work, but one day i'll figure it out! trying to
    //get the squares to fade out, but I actually want placeholder squares (black)
    //to take the place of the matched items.

    // // this counter must be set to 2, to limit clicks in the guessedArray
    // if (counter === 2) {
    //   counter = 0;

    //   //this if statement tells the guessedArrays to match
    //   if (guessedArray[0] === guessedArray[1]) {
    //     console.log("match");
    //   } else {

    //     //this else, in the if statement tells us that the cards don't match
    //     console.log("no match");
    //     guessedArray = [];
    //     $('#' + matchedDivIds[0]).removeClass(squareId[parseInt(matchedDivIds[0])]);
    //     $('#' + matchedDivIds[1]).removeClass(squareId[parseInt(matchedDivIds[1])]);
    //     // $squares.eq().fadeOut()
    //   }
    // }
    // console.log(squareId[parseInt(this.id)]);



  });

  //fade the squareId
  $(".squareId").click(function() {
    $("#0").fadeOut(1000);
    $("#2").fadeOut(1000);

  });



  //FIRST GUESS-store this.id into first guess????
  // this.id = firstGuess;

  //NO: X
  //determine if match
  if ($('#' + firstGuess).hasClass(squareId[parseInt(this.id)]))

  //YES:)

  //- fade both imgs: X
    $(squareId).fadeOut(1000);

  //- push both this.id into guessedArray: X

  //NO:
  //this removes class from firstGuess
  var timer = setTimeout(function() {
    $('#' + firstGuess).removeClass(squareId[parseInt(firstGuess)]);
    firstGuess = null;
    timer = null;
  }, 1000);
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
init();
shuffle(squareId);
// console.log(squareId);