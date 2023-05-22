function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a && b;
};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  // your code here
  return Boolean(a);
};

function isEqual(a, b) {
  // your code here
  return a === b;
};

function isGreaterThan(a, b) {
  // your code here
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
};

function isOdd(a) {
  // your code here
  return a % 2 !==0;
};

function isEven(a) {
  return a % 2==0;
  // your code here
};

function isSquare(a) {
  // your code here
  if (Number.isInteger(Math.sqrt(a)) == true) {
    return true;
  } else {
    return false;
  };
};

function startsWith(char, string) {
  // your code here
  return string.startsWith(char);
};

function containsVowels(string) {
  // your code here
  string = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) return true;
  }
  return false;
};


function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()){
    return (true);
  } else {
    return (false);
  };
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
