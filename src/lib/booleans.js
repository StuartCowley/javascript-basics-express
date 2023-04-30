const negate = a => {
  if (a) {
    return false;
  }
  return true;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a || b) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (a === false && b === false){
    return true;
  }
  return false;
};

const one = (a, b) => {
  if ((a && b === false) || (b && a === false)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }
  return true;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  const n = Math.sqrt(a);
  if (n * n === a) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  const lowercase = string.toLowerCase();
  for (let n = 0; n < lowercase.length; n += 1)
    if (
      lowercase.charAt(n) === 'a' ||
      lowercase.charAt(n) === 'e' ||
      lowercase.charAt(n) === 'i' ||
      lowercase.charAt(n) === 'o' ||
      lowercase.charAt(n) === 'u'
    ) {
      return true;
    }
  return false;
};

const isLowerCase = string => {
  const firstletter = string.charAt(0);
  if (firstletter === firstletter.toLowerCase()) {
    return true;
  }
  return false;
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
};