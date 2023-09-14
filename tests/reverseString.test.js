const reverseString = require('../functions/reverseString');

// empty strings returns empty strings
test('Empty input returns empty output', () => {
  expect(reverseString('')).toBe('');
})

// Single character remains unchanged
test('for a single character return the same character', () => {
  expect(reverseString('A')).toBe('A');
})

// A word is reversed correctly
test('Reverse a word correctly', () => {
  expect(reverseString('Javascript')).toBe('tpircsavaJ');
})

// A phrase is reversed correctly
test('Reverse the string correctly', () => {
  expect(reverseString("I'm testing my code")).toBe("edoc ym gnitset m'I");
})

// Palindromes stays the same
test('Palindromes reamins the same', () => {
  expect(reverseString('SATOR AREPO TENET OPERA ROTAS')).toBe('SATOR AREPO TENET OPERA ROTAS');
})