import calculator from '../functions/calculator';
import { validateArguments } from '../functions/calculator';

// Test addition
test('1 + 2 equals 3', () => {
  expect(calculator.add(1,2)).toBe(3);
})
// If both arguments are invalid returns false
test('"one" + "two" returns false', () => {
  expect(calculator.add('one', 'two')).toBe(false);
})
// if one argument is invalid returns false
test('10 + "cat" returns false', () => {
  expect(calculator.add(10, 'cat')).toBe(false);
})

// Test substraction
test('314 - 24 equals to 290', () => {
  expect(calculator.substract(314, 24)).toBe(290);
})
// If both arguments are invalid returns false
test('"ten" - "five" returns false', () => {
  expect(calculator.substract('ten', 'five')).toBe(false);
})
// if one argument is invalid returns false
test('10 - "5" returns false', () => {
  expect(calculator.substract(10, '5')).toBe(false);
})

// Test multiplication
test('13*13 equals to 169', () => {
  expect(calculator.multiply(13, 13)).toBe(169);
})
// If both arguments are invalid returns false
test('"two" * "2" returns false', () => {
  expect(calculator.substract('two', '2')).toBe(false);
})
// if one argument is invalid returns false
test('2 * "2" returns false', () => {
  expect(calculator.substract(2, '2')).toBe(false);
})

// Test division
test('"5"/2 equals to 2.5', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
})
// If both arguments are invalid returns false
test('"five" / "2" returns false', () => {
  expect(calculator.substract('five', '2')).toBe(false);
})
// if one argument is invalid returns false
test('5 / "dog" returns false', () => {
  expect(calculator.substract(5, 'dog')).toBe(false);
})

// validation returns false when one or lacks one or two arguments
test("when no input arguments validation returns false", () => {
  expect(validateArguments()).toBe(false);
})
test("when only 1 argument as input validation returns false", () => {
  expect(validateArguments(3)).toBe(false);
})
