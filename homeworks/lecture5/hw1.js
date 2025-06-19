// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//output 5 5 5 5 5 -->var i is function-scoped for loop would run and complete first and than i =5 than run 5 times timeout functions

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//output 0 1 2 3 4 --> i is let so its block scoped the time out function run would access the i the time i run

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output 0 1 2 3 4 --> IIFE captures the current value of i 



// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// output :I am fn --> function is let so its block scoped 

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// output: { name: 'another obj' } --> setTimeOut call the reference of obj which was be updated