// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  let map = new Map();
  function helper(value) {
    if (!value) return value;
    if (map.has(value)) {
      return map.get(value);
    }
    const copy = Array.isArray(value) ? [] : {};
    map.set(value, copy);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = helper(value[key]);
      }
    }
    return copy;
  }
  return helper(obj);
};

const data = { name: "foo", child: null };
data.child = data;

const cloned = cloneDeepWithLoop(data);

console.log(cloned !== data); // true
console.log(cloned.child === cloned); // true
console.log(cloned.child !== data.child); // true
