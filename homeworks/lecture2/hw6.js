// Algorithms

// 1. Write a function that returns the largest element in a list.
// if sorted: O(logn)
// if unsorted: O(n)
function largestElement(list) {
  // implement your code here
  return Math.max(...list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  return list.reverse();
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let counter = 0;
  for (const ele of list) {
    if (counter > 1) return true;
    if (ele === element) counter++;
  }
  return false;
}

let list = [2, 4, 5, 1, 3, 2, 10, 2, -1, 2, 3];
console.log(largestElement([...list]));
console.log(reverseList([...list]));
console.log(checkTwice([...list], -1));
console.log(checkTwice([...list], 2));
