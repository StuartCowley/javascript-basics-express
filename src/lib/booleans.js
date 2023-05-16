function negate(a) {
  if (a === true) {
    return false;
  }
  return true;
}

function both(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a || b === true) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (!a && !b) {
    return true;
  }
  return false;
}

function one(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  }
  return false;
}

function truthiness(a) {
  return Boolean(a);
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
  if (a % 2) {
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
  return Math.sqrt(a) % 1 === 0;
}

function startsWith(char, string) {
  return string.startsWith(char);
}

function containsVowels(string) {
  string = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  vowels.forEach(vowel => {
    if (string.includes(vowel)) {
      count++;
    }
  });
  if (count > 0) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
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
