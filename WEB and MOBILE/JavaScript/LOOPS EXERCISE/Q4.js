// A JS code to find the power of a number using for loop.

const base = 2;
const exponent = 3;
let result = 1;
for (let i = 0; i < exponent; i++) {
  result *= base;
}
console.log(`${base} raised to the power of ${exponent} is ${result}`);
