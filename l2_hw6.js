// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    ans = -Infinity;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > ans) {
          ans = list[i];
        }
    }
    return ans;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for (let i = 0; i < list.length / 2; i++) {
      [list[i], list[list.length - 1 - i]] = [list[list.length - 1 - i], list[i]];
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            count++;
            if (count === 2) {
              return true;
            }
        }
        }
    return false;
}
