import caesarCipher from './caesarCipher';

test('shifts each letter of a word by 1', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('shifts each letter of a word by 5', () => {
  expect(caesarCipher('hello', 5)).toBe('mjqqt');
});

test('letters wrap around', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('encrypts sentences', () => {
  expect(caesarCipher('hello there', 1)).toBe('ifmmp uifsf');
});

test("non-word characters remain unaffected", () => {
  expect(caesarCipher("hi what's up?", 1)).toBe("ij xibu't vq?");
});

test("encrypts both cases", () => {
  expect(caesarCipher('HelLo', 1)).toBe('IfmMp');
});
