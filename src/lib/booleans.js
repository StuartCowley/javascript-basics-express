function negate(a) {
return a = !a;
};

function both(a, b) {
  if (!a,b) {
    return a && b;
  } else {
    return a && b;
  }
};

function either(a, b) {
  if (!a,b) {
    return a || b;
  } else {
    return a || b;
  }
};

function none(a, b) {
  return !a && !b;
};

function one(a, b)  {
 return a !== b;
};

function truthiness(a) {
  const name = a;
  return Boolean(name);
};

function isEqual(a, b) {
 return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
 return a % 2 === 1;
};

function isEven(a) {
 return a % 2 === 0;
};

function isSquare(a) {


function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  }
    return false;
};

function containsVowels(string) {
 const vowels = 'aeiou';
 const lowerCaseString = string.toLowerCase();
 for (let i = 0; i < vowels.length; i++) {
  if (lowerCaseString.includes(vowels[i])) {
    return true;
  }
 }
 return false;
};

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
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