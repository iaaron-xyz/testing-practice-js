function validateArguments(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  return true;
}

function add(x, y) {
  if (validateArguments(x, y)) {
    return x + y;
  }
  return false;
}

function substract(x, y) {
  if (validateArguments(x, y)) {
    return x - y;
  }
  return false;
}

function multiply(x, y) {
  if (validateArguments(x, y)) {
    return x*y;
  }
  return false;
}

function divide(x, y) {
  if (validateArguments(x, y)) {
    return x/y;
  }
  return false;
}

const calculator = {
  add,
  substract,
  multiply,
  divide,
}

export default calculator;