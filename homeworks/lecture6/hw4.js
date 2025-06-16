/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  // store the decimal number first
  num = num.toString();
  let args = num.split(".");
  let rightPart = args.length > 1 ? "." + args[1] : "";
  let leftPart = args[0];
  const n = leftPart.length;

  let ret = "";
  for (let i = n - 1, count = 0; i >= 0; i--) {
    ret = leftPart[i] + ret;
    count++;
    if (count % 3 === 0 && i !== 0) {
      ret = "," + ret;
    }
  }
  return ret + rightPart;
}

const num = 123544353485;
const num2 = 123124.231123;

console.log(format(num));
console.log(format(num2));
