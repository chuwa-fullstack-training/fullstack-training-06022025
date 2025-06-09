/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1) {
    const a = arguments[0]; // get the first arg outside of the function first
    return function (b) {
      return a + b;
    };
  }
}

console.log(sum(2)(3));
console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
