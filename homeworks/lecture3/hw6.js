/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  // implement here
  let total = 0;
  let freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freq.get(nums[i])) {
      total += freq.get(nums[i]);
      freq.set(nums[i], freq.get(nums[i]) + 1);
    } else {
      freq.set(nums[i], 1);
    }
  }
  return total;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 * abceeijkl = bcjkl
 */
function removeVowels(s) {
  // implement here
  let set = new Set(["a", "e", "i", "o", "u"]);
  let ret = "";
  for (const c of s) {
    if (!set.has(c)) {
      ret += c;
    }
  }
  return ret;
}

let nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));
nums = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums));
nums = [1, 2, 3];
console.log(numIdenticalPairs(nums));

let s = "abceeijkl";
console.log(removeVowels(s));
