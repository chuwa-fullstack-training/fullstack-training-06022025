/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  let ret = [];
  let word = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      ret.unshift(word);
      word = "";
    }
    i++;
  }
  if (word) {
    ret.unshift(word);
  }
  console.log(ret);
  return ret; // [ 'blue', 'is', 'sky', 'the' ]
}

function reverseWords_inplace(str) {
  reverse(str, 0, str.length - 1);
  let left = 0;
  for (let right = 0; right <= str.length; right++) {
    if (right === str.length || str[right] === " ") {
      reverse(str, left, right - 1);
      left = right + 1;
    }
  }
  console.log(str.join(""));
  return str.join("");

  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++, right--;
    }
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
reverseWords_inplace(input);
