// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5, 5, 5, 5, 5
//since i is var and is global scope, so there is only one i in the function, by the timeout running, the i = 5 already.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0,1,2,3,4
//i here is let, so is a block scope, and each iteration get its own i, so we will printout the updating i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0,1,2,3,4
//IIFE catch every single value by creating new scope for each i


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//I am fn
//setTimeout looks up the function you passed in but not the reference



// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// name: another obj
//obj is the reference,so the reference is changed n obj.name = 'another obj'