// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, seen = new Map()) => {
    // Implement the function here
    if(obj === null || typeof obj !== 'object') {
        return obj; // Return primitive values or null as is
    }

    if (seen.has(obj)) {
        return seen.get(obj); // Return the already cloned object to handle circular references
    }
    const clone = Array.isArray(obj) ? [] : {};
    seen.set(obj, clone); // Store the reference of the original object to handle circular references
    //clone key by key
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], seen); // Recursively clone each property
        }
    }
    return clone; // Return the cloned object

}