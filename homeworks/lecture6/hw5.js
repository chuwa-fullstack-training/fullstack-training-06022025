// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
    function delay(val){
    return new Promise(resolve => {
      setTimeout(()=>{
        console.log(val);
        resolve();
      },1000);
    });
  }
  let p = Promise.resolve();
  for (let i = 1; i<=3; i++){
    p = p.then(() => delay(i));
  }
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  function delay(val){
    return new Promise(resolve =>{
      setTimeout(()=>{
        console.log(val);
        resolve();
      },1000);
    });
  }
    let p = Promise.resolve();
    nums.reduce((p,num)=>p.then(()=>delay(num)), Promise.resolve());
  // your code here
}
// printList(nums);


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  function delay(val){
    return new Promise(resolve =>{
      setTimeout(()=>{
      console.log(val);
      resolve();
    },1000);
  });
  }
  // your code here
  let light = ['red', 'green', 'yellow'];
  function loop(){
  light.reduce((p,color)=>p.then(()=>delay(color)), Promise.resolve()).then(loop);
  }
  loop();
}
trafficLight();