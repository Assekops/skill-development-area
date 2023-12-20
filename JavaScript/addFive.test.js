const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test('run a number plus 5', () => {
  expect(addFive(1)).toBe(6);
});
