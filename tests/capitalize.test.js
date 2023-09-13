const capitalize = require('../functions/capitalize');

test('capitalize mark to equal Mark', () => {
  expect(capitalize('mark')).toBe('Mark');
})