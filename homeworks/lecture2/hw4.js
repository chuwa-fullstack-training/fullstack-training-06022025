// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}// a = 7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// a = 5 because var is function scoped

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//a = 3 because a is not declared so it's a global variable

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// a in first is global variable so it will be 6
// second will output 6 because first() changes the global variable a to 6
// a = 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// output 7 because console.log(a); is in the function and var a = 7 is function scoped

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// out put 1
// 1. Hoisted function declaration creates local variable 'a' pointing to function a() {}
//reassigned a to 10 so it is not a global variable now  
