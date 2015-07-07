console.log('activate framework!');


var square = document.getElementsByClassName("square");
console.log(square);


var board = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    console.log(this.id);
  })

}

// activateClass.onclick = function() {

//   document.querySelector(".activate").onclick = function() {
//     console.log('');
//   }
// };