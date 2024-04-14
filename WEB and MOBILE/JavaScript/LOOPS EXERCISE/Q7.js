// A JavaScript code to calculate the sum of digits in a number.

const number = 12345;
const numberString = number.toString();
let sum = 0;
for (let i = 0; i < numberString.length; i++) {
  sum += parseInt(numberString[i]);
}
console.log(`Sum of digits in ${number} is: ${sum}`);
