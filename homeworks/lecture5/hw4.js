// what is the output? and explain why?

// 1
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//     return 2;
//   })
//   .catch((err) => {
//     return 3;
//   })
//   .then((res) => {
//     console.log(res);
//   }); // 1， 2

// // 2
// Promise.reject(1)
//   .then((res) => {
//     console.log(res); // skip, because reject(1)
//     return 2;
//   })
//   .catch((err) => {
//     console.log(err); // print out 1
//     return 3; // solved and pass 3 to next .then
//   })
//   .then((res) => {
//     console.log(res);
//   });
// 1, 3

// //3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res)) // not all promise been resolved, so it didn't go to .then
  .catch((err) => console.log(err)); // immediately reject the first error, which is 2

// Error: 2
