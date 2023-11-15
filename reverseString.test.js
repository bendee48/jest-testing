import reverseString from './reverseString';

test('reverses a string', () => {
  const str = 'hello';
  expect(reverseString(str)).toBe('olleh');
});

test('reverses a string with multiple words', () => {
  const str = 'hello there partner';
  expect(reverseString(str)).toBe('rentrap ereht olleh');
})

test('no argument throws error', () => {
  expect(() => { reverseString() }).toThrow();
})

test('no argument throws error with helpful message', () => {
  expect(() => { reverseString() }).toThrow('You must provide a string.');
})