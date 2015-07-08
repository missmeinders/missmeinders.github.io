console.log("new main working");

var $squares = $(".square");

$squares.on("click", function() {
  console.log("#" + this.id);
  addClassToSquare("daydream", "#" + this.id);
});

var addClassToSquare = function(className, squareId) {
  // var $squareNumber1 = $("#1");
  // $squareNumber1.addClass("daydream");
  $(squareId).addClass(className);
}