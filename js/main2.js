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

// var boardState = (reset) {
//   onclick.fadeout if 0 || <3
// }

// var boardState = (active) {
//   onclick.fadein > 2
// }

// create a function
// boardState
// if 2 clicks then keep cards visible
// img fade in
//   if 0 clicks then reset
//img fade out