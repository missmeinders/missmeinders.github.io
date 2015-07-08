console.log("new main working");

var $squares = $(".square");

var squareId = ["daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy", "daydream", "grumpy", "happy", "messy", "slow", "cheerful", "bump", "cool", "wrong", "topsyturvey", "strong", "missbossy "]

$squares.on("click", function() {
  console.log("#" + this.id);
  $(this).addClass(squareId[parseInt(this.id)]);
  // addClassToSquare("squareId", "#" + this.id);
});

// var addClassToSquare = function(className, squareId) {
//   // var $squareNumber1 = $("#1");
//   // $squareNumber1.addClass("daydream");
//   $(squareId).addClass(className);
// }

// var count = 0


// var squareId = function() {
//   while (count < this.id.length) {
//     $(squareId).addClass(className);
//     console.log("squareId");
//   }
// };

// var i = 0; i < cities.length; i++


// math.random (have to hold info state)