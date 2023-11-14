import reverseString from './reverseString';

test('reverses a string', () => {
  const str = 'hello';
  expect(reverseString(str)).toBe('olleh');
});

test('reverses a string with multiple words', () => {
  const str = 'hello there partner';
  expect(reverseString(str)).toBe('rentrap ereht olleh');
})