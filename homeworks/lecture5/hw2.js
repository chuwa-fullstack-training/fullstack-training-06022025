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
  // your code here                                            //remove the extra space at the end
  return  str.split(' ').reduce((acc, word)=>word + ' '+acc, '').trim();
}

const input = 'the sky is blue';
