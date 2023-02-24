function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a == 0) {
    return 0;
  }
  return a / b;
}

function power(a, b) {
  // eslint-disable-next-line no-restricted-properties
  return Math.pow(a, b);
}

function round(a) {
  return Math.round(a);
}

function roundUp(a) {
  return Math.ceil(a);
}

function roundDown(a) {
  return Math.floor(a);
}

function absolute(a) {
  return Math.abs(a);
}

function quotient(a, b) {
  const r = a / b;
  return Math.trunc(r);
}

function remainder(a, b) {
  const r = a % b;
  return r;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
