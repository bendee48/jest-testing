// Calculator object with add, multiply, divide and subtract functions.
// Each function takes 2 numbers and returns the correct result.
const calculator = {
  add(num1, num2) {
    if (num1 == undefined || num2 == undefined) throw new Error('Must provide 2 numbers.');

    return num1 + num2;
  },
  // Subtracts second number from first number
  subtract(num1, num2) {
    if (num1 == undefined || num2 == undefined) throw new Error('Must provide 2 numbers.');

    return num1 - num2;
  },
  multiply(num1, num2) {
    if (num1 == undefined || num2 == undefined) throw new Error('Must provide 2 numbers.');

    return num1 * num2;
  },
  // Divide first number with second number
  divide(num1, num2) {
    if (num1 == undefined || num2 == undefined) throw new Error('Must provide 2 numbers.');

    return num1 / num2;
  }
}

export default calculator;