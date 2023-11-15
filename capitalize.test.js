import capitalize from './capitalize';

test('capitalizes first letter in a string (1)', () => {
  const str = 'hello';
  expect(capitalize(str)).toBe('Hello');
});

test('capitalizes first letter in a string (2)', () => {
  const str = 'goodbye';
  expect(capitalize(str)).toBe('Goodbye');
});

test('first letter is the only capital', () => {
  const str = 'hELLo';
  expect(capitalize(str)).toBe('Hello');
});

test('capitalizes string in all caps', () => {
  const str = 'HELLO';
  expect(capitalize(str)).toBe('Hello');
});

test('capitalizes first letter in a string with multiple words', () => {
  const str = 'hello THERE';
  expect(capitalize(str)).toBe('Hello there');
})

test('empty string returns an empty string', () => {
  const str = '';
  expect(capitalize(str)).toBe('');
})

test('no argument returns undefined', () => {
  expect(capitalize()).toBeUndefined();
})