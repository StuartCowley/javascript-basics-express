function negate (a) {
  return !a
};

function both (a, b) {
  return a && b
};

function either (a, b) {
  return a || b
};

function none (a, b) {
  return !a && !b
};

function one (a, b) {
  return a !== b
};

function truthiness (a) {
  if (a) return true
  return false
};

function isEqual (a, b) {
  return a === b
};

function isGreaterThan (a, b) {
  return a > b
};

function isLessThanOrEqualTo (a, b) {
  return a <= b
};

function isOdd (a) {
  if (a % 2 !== 0) { return true }
  return false
};

function isEven (a) {
  if (a % 2 === 0) { return true }
  return false
};

function isSquare (a) {
  if (Number.isInteger(Math.sqrt(a))) return true
  return false
};

function startsWith (char, string) {
  if (char === string.charAt(0)) return true
  return false
};

function containsVowels (string) {
  if (string.includes('a') || string.includes('e') || string.includes('O')) return true
  return false
}

function isLowerCase (string) {
  if (string.toLowerCase() === string) return true
  return false
};

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
  isLowerCase
}
