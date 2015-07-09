console.log("new main working");

var $squares = $(".square");

var squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream2", "grumpy2", "happy2", "messy2", "slow2", "cheerful2", "bump2", "cool2", "wrong2", "topsyturvey2", "strong2", "missbossy2"];

var counter = 0;

var arrayCatcher = [];

// // see if it matches the card that was already hidden

//reset array catcher after
// checkWinner (evertime you click on pic, call function)

// var checkWinner =


function arrayMatch() {
  if (arrayCatcher[0] === arrayCatcher[1]);
  console.log("arrayMatch working");
}


$squares.on("click", function() {
  console.log("#" + this.id);
  $(this).addClass(squareId[parseInt(this.id)]);
  arrayCatcher.push(squareId[parseInt(this.id)]);
  console.log(squareId[parseInt(this.id)]);
});


for (var i = 0; i < squareId.length; i++) {
  squareId[i].on("click", function() {
    // console.log(this.id);
    counter++;
    if (counter == 3) counter = 1;
    // $(this).fadeTo('slow', 0);
  })

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