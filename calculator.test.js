import calculator from './calculator';

// Tests for add(num1, num2) function of calculator object
// Adds 2 numbers together and returns result
test('adds 2 numbers together', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('throws error if only 1 number provided', () => {
  expect(() => { calculator.add(1) }).toThrow();
});

test('throws error if 0 numbers provided', () => {
  expect(() => { calculator.add() }).toThrow('Must provide 2 numbers.');
});

test('adds first 2 numbers if more than 2 numbers provided', () => {
  expect(calculator.add(1,2,3,4)).toBe(3);
});

// Tests for subtract(num1, num2) function of calculator object
// Subtracts one number from another and returns result
test('subtracts 1 number from another and returns correct result', () => {
  expect(calculator.subtract(5,3)).toBe(2);
});

test('subtracts second number from first number', () => {
  expect(calculator.subtract(3,5)).toBe(-2);
});

// Tests for multiply(num1, num2) function of calculator object
// Multiplies 2 numbers together and returns result
test('multiplies 2 numbers together and returns correct result (1)', () => {
  expect(calculator.multiply(2,5)).toBe(10);
});

test('multiplies 2 numbers together and returns correct result (2)', () => {
  expect(calculator.multiply(3,6)).not.toBe(20);
});

// Tests for divide(num1, num2) function of calculator object
// Divides 2 numbers and returns result
test('divides 2 numbers and returns correct result', () => {
  expect(calculator.divide(10,2)).toBe(5);
});

test('divides first number by second', () => {
  expect(calculator.divide(2,10)).not.toBe(5);
});
