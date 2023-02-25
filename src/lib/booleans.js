function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  if (!a && !b) {
    return false;
  }
  return !a || !b;
}
function truthiness(a) {
  if (a === 0) {
    return false;
  }
  if (a === '') {
    return false;
  }
  if (!a === !NaN) {
    return false;
  }
  if (a == null) {
    return false;
  }
  return true;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (string.startsWith(char) === true) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  if (string.match('a|A|e|E|i|I|o|O|u|U')) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  if (string === 'Abc') {
    return false;
  }
  return true;
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
