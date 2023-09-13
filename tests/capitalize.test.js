const capitalize = require('../functions/capitalize');

// Capitalize a valid string
test('capitalize mark to equal Mark', () => {
  expect(capitalize('mark')).toBe('Mark');
})

// empty string returns empty string
test('Deal with an empty string | "" -> ""', () => {
  expect(capitalize('')).toBe('');
})

// In a phrase capitalize just the first word.
test('Capitalize just the first word | "i code" -> "I code"', () => {
  expect(capitalize('i code')).toBe('I code');
})

// Numbers are not captalized
test('Numbers remain equal', () => {
  expect(capitalize('12/november/2023')).toBe('12/november/2023');
})