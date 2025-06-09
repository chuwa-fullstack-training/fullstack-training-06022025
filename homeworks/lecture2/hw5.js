// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // hoisting so y is declared but not initialized yet
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);  // y is now initialized to 5
}
if (x === 3) {
  console.log(y);
}

// output " undefined 5 5" 

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

//var is function scoped so output will be "2 2"