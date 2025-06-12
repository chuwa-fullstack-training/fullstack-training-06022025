// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleIt(nums) {
  return nums.map((item) => item * 2);
}
let nums = [1, 2, 3, 4, 5];
console.log(doubleIt([...nums]));

// 2. Given an array of numbers, return an array of numbers that are even.
function filterEven(nums) {
  return nums.filter((item) => item % 2 === 0);
}
console.log(filterEven([...nums]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
  return str.split("").reduce((accu, curr) => curr + accu);
}
console.log(reverseString("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
  return arr.reduce((accu, curr) => {
    return accu.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}
const arr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flattenArray(arr1));
const arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
console.log(flattenArray(arr2));
const arr3 = [
  [0, 1],
  [2, 3],
  [4, [5, 6], [[7, 8, 9], [10], [[11, 12]]]],
];
console.log(flattenArray(arr3));
