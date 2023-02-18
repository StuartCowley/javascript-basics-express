const { arrayToCSVString } = require('./arrays');

function negate(a) {
  return !a;
}

function both(a, b) {
  // your code here
}

function either(a, b) {
  // your code here
}

function none(a, b) {
  // your code here
}

function one(a, b) {
  // your code here
}

function truthiness(a) {
  if (!a) {
    return false;
  }
  return true;
}

function isEqual(a, b) {
  // your code here
}

function isGreaterThan(a, b) {
  // your code here
}

function isLessThanOrEqualTo(a, b) {
  // your code here
}

function isOdd(a) {
  if (typeof a !== 'number') {
    return 'err';
  }
  if (a % 2 === 1) {
    return true;
  }
  return false;
}

function isEven(a) {
  // your code here
}

function isSquare(a) {
  // your code here
}

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  // your code here
}

function isLowerCase(string) {
  // your code here
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
