import calculator from '../functions/calculator';

// Test addition
test('1 + 2 equals 3', () => {
  expect(calculator.add(1,2)).toBe(3);
})

// Test substraction
test('314 - 24 equals to 290', () => {
  expect(calculator.substract(314, 24)).toBe(290);
})

// Test multiplication
test('13*13 equals to 169', () => {
  expect(calculator.multiply(13, 13)).toBe(169);
})

// Test division
test('5/2 equals to 2.5', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
})