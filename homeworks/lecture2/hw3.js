// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.30000000000000004 because of floating-point precision issues in JavaScript, the result of adding 0.1 and 0.2 does not equal exactly 0.3, but rather a very close approximation.

console.log(0.1 + 0.2 == 0.3); //so False

console.log(1 +  "2" + "2");// 122 first covert 1 to string then add "2" "2"

console.log(1 +  +"2" + "2"); //+"2" is unary plus operator so convert "2" to number 2 then 1+2 = 3 then coveret to String 

console.log(1 +  -"1" + "2"); // -"1" unary negation so 1-1 = 0 then convert 0 tp string 

console.log(+"1" +  "1" + "2"); // +"1" is unary plus operator so convert "1" to number 1 then 1 + "1" = "11" then add "2" = "112"
                                //the space is not count in javascript
console.log( "A" - "B" + "2"); // "A" - "B" = NaN then + "2" = NaN2

console.log( "A" - "B" + 2); // NaN + 2 = NaN

console.log("0 || 1 = "+(0 || 1)); // 0 is falsy so return 1 --> "0 || 1 = " + " 1"= "0 || 1 = 1"

console.log("1 || 2 = "+(1 || 2)); // 1 is truthy so return 1 --> "1 || 2 = " + " 1"= "1 || 2 = 1"

console.log("0 && 1 = "+(0 && 1)); // 0 is falsy so return 0 --> "0 && 1 = " + " 0"= "0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2)); // 1 is truthy so return 2 --> "1 && 2 = " + " 2"= "1 && 2 = 2"

console.log(false == '0') // true 0 is falsy and == would convert type 

console.log(false === '0') //false because === check type 0 is string and false is boolean
