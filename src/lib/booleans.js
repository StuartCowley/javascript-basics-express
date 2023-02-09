function negate(a) {
  // return !a - to return opposite of a
  if (a === true) {
    return false;
  }
  return true;
};

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
};

function none(a, b) {
  if (a === false && b === false){
    return true;
  }
  return false;
};

function one(a, b) {
  if (a === true && b === false) {
    return true;
  }
  if (a === false && b === true) {
    return true;
  }
  return false;
};

function truthiness(a) {
  if (a) {
    return true;
  }
  return false;
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
};

function isGreaterThan(a, b) {
  if (a > b){
    return true;
  }
  return false;
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b){
    return true;
  }
  return false;
};

function isOdd(a) {
  if (a % 2 === 0){
    return false;
  }
  return true;
};

function isEven(a) {
  if (a % 2 === 0){
    return true;
  }
  return false;
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0){
    return true;
  }
  return false;
};

function startsWith(char, string) {
  if (string.startsWith(char)){
    return true;
  }
  return false;
};

function containsVowels(string) {
  const vowels = 'aeiou';
const lowerCaseString = string.toLowerCase();
  for (let i=0; i < vowels.length; i++) {
    if (lowerCaseString.includes(vowels[i])) {
      return true;
    }
  }
  return false;
};

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()){
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
