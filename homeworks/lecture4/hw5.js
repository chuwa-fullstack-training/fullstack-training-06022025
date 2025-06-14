// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (typeof obj !== 'object' || obj === null){
        return obj;
    }
    const res = Array.isArray(obj) ? []: {};
    for (let key in obj){
        res[key] = cloneDeepWithLoop(obj[key]);
    }
    return res;
}
