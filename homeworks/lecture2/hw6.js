// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    list.sort();
    return list[list.length-1];
}
console.log(largestElement([1,3,4,5,2]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    return list.reverse();
}
console.log(reverseList([1,3,4,5,2]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i<list.length; i++) {
        if (list[i] === element) {
            count++;
        }
    }
    if (count>=2){
        return true;
        } else {
            return false;
        }
    }
console.log(checkTwice([1,3,4,2,2], 2));
console.log(checkTwice([1,3,4,5,2], 0));