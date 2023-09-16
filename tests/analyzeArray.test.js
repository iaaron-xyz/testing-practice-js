import analyzeArray from "../functions/analyzeArray";

// valid input
test('compute properly valid input: [1,8,3,4,2,6]', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
})
// a single element array
test('compute properly valid input: [8]', () => {
  expect(analyzeArray([8])).toEqual({
    average: 8,
    min: 8,
    max: 8,
    length: 1,
  });
})
// empty array
test('compute input: []', () => {
  expect(analyzeArray([])).toBe(null);
})
// array mixed with numbers and non-numbers
test('compute input: [1,8,3,4,2,"six"]', () => {
  expect(analyzeArray([1,8,3,4,2,'six'])).toBe(undefined);
})
// array with no numbers
test('compute input: [[],"cat","six"]', () => {
  expect(analyzeArray([[],'cat','six'])).toBe(undefined);
})
// non-array input
test('compute input: "1,2,3,4,5"', () => {
  expect(analyzeArray('1,2,3,4,5')).toBe(undefined);
})