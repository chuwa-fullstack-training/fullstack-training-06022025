// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

//output : a c e d b
//the order of execution is:
// 1. 'a' is logged immediately then 'c' is logged immediately
// 2. The promise executor function runs, logging 'e' immediately and resolving the promise with 'd'. then logging 'd'
// 3. The setTimeout callback is scheduled to run after the current call stack is cleared, logging 'b'.


// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');

//outout: start 1 success 
//the order of execution is:
// 1. 'start' is logged immediately
// 2. The promise executor function runs, logging '1' immediately and resolving the promise with 'success'. then logging 'success'