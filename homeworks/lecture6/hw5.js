// 1. use `promise` to print 1, 2, 3 in every 1 second
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function print() {
  // your code here
  wait(1000)
    .then(() => {
      console.log(1);
      return wait(1000);
    })
    .then(() => {
      console.log(2);
      return wait(1000);
    })
    .then(() => {
      console.log(3);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce(
    (prePromise, num) => {
      return prePromise.than(() => {
        console.log(num);
        return wait(1000);
      })
    }, Promise.resolve());

}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = [
    { color: 'red', duration: 1000 },
    { color: 'green', duration: 1000 },
    { color: 'yellow', duration: 1000 }
  ];

  let i = 0;

  function light() {
    console.log(lights[i].color);
             //set time out and callback
    setTimeout(() => {
      i = (i + 1) % lights.length;
      light();
    },
      lights[i].duration);

    //run func
    light();
  }
}
