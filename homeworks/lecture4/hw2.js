// ONLY use map, filter, reduce to solve the following problems:

const { PureComponent } = require("react");

// 1. Given an array of numbers, return an array of numbers that are doubled.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2)

// 2. Given an array of numbers, return an array of numbers that are even.
                                          //remainder ===0 mean even
const evenNumbers = numbers.filter(num => num%2 === 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

const str  = "Hello World";
const initialValue = [];


const reversedString = str.split('').reduce((pre,curr)=> curr+pre,"");
console.log(reversedString);


/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
