// what is the output of the following code? and explain why?

// // 1
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000); // 5 5 5 5 5 Async, and var i is hoisted
// }

// // 2
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000); // 0 1 2 3 4
// }

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
} // 0 1 2 3 4, IIFE

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000); // this only schedules the orinigal fn to the callback queue
fn = () => {
  console.log("I am another fn");
}; // I am fn

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// another obj
