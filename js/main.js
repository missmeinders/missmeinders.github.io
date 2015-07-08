console.log("new main working");

var $squares = $(".square");

var squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream2", "grumpy2", "happy2", "messy2", "slow2", "cheerful2", "bump2", "cool2", "wrong2", "topsyturvey2", "strong2", "missbossy2"];

var arrayCatcher = [];

//push data from images into array
// ifarrayCather[0] = ifarrayCather[1]
// return match;
// else; (do function that flips)



// // see if it matches the card that was already hidden
// if (arrayCatcher[0] == arrayCatcher[1] {
//     arrayCatcher.length = 0;
//     return match;
//     console.log("match");
//   } else {
//     // no match, so show both cards again
//     arrayCatcher[0].viewsquare(true);
//     arrayCatcher[1].viewsquare(true);
//     arrayCatcher.length = 0;
//     console.log("no match");
//   };


  $squares.on("click", function() {
    console.log("#" + this.id);
    $(this).addClass(squareId[parseInt(this.id)]);
    arrayCatcher.push
  });

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

  shuffle(squareId); console.log(squareId);
