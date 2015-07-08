console.log('activate framework!');

var square = document.getElementsByClassName("square");
console.log(square);

var board = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

var counter = 0;

// var click =
// var card1 =
// var card2 =

// var match =
// var noMatch =

// var backCard =
// var frontCard =

// var emotions = //array of img + word emotions

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    // console.log(this.id);
    counter++;
    if (counter == 3) counter = 1;
    // $(this).fadeTo('slow', 0);
  })

}

//Remember to set your condition outside the loop!
var count = 0
var squareId = [".daydream", ".grumpy", ".happy", ".messy", ".slow", ".cheerful", ".bump", ".cool", ".wrong", ".topsyturvey", ".strong", ".missbossy "]

var squareId = function() {
  while (count < squareId.length) {
    //
    console.log("squareId");
  }
};

squareId();