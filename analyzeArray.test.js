import analyzeArray from './analyzeArray';

const array = [1,2,3,4,5];

test("returns an object with an average property of 3", () => {
  expect(analyzeArray(array)).toHaveProperty('average', 3);
});

test("returns an object with a min property of 1", () => {
  expect(analyzeArray(array)).toHaveProperty('min', 1);
});

test("returns an object with a max property 5", () => {
  expect(analyzeArray(array)).toHaveProperty('max', 5);
});

test("returns an object with a length property of 5", () => {
  expect(analyzeArray(array)).toHaveProperty('length', 5);
});

// Test different set and total of numbers
const array2 = [6,7,8,9,10,11];

test("average property is correct (array2)", () => {
  expect(analyzeArray(array2).average).toBe(8.5);
})

test("min property is correct (array2)", () => {
  expect(analyzeArray(array2).min).toBe(6);
})

test("max property is correct (array2)", () => {
  expect(analyzeArray(array2).max).toBe(11);
})

test("length property is correct (array2)", () => {
  expect(analyzeArray(array2).length).toBe(6);
})

// Test decimals
const array3 = [1.2, 3.3, 4.5, 6.7];

test("average property is correct for decimals", () => {
  expect(analyzeArray(array3).average).toBe(3.925)
});

// Test for non number inputs
const array4 = ['hello', 2, 3];

test('throws error if not all array contents are numbers', () => {
  expect(() => { analyzeArray(array4) }).toThrow(Error);
});

test('throws helpful error message if not all array contents are numbers', () => {
  expect(() => { analyzeArray(array4) }).toThrow('All array items must be numbers.');
});