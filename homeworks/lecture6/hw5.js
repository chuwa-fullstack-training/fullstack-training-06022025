// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(2);
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(3);
          resolve();
        }, 1000);
      });
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((accu, curr) => {
    return accu.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(curr);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

// 1 2 3   4 5 6
const lights = ["red", "green", "yellow"];
function trafficLight() {
  // your code here
  let index = 0;
  return new Promise((resolve) => {
    setInterval(() => {
      console.log(lights[index]);
      index = (index + 1) % lights.length;
    }, 1000);
  });
}

// print();
// printList();
trafficLight();
