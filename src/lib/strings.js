function sayHello (string) {
  return 'Hello, ' + string +'!'
};

function uppercase (string) {
  return string.toUpperCase()
};

function lowercase (string) {
  return string.toLowerCase()
};

function countCharacters (string) {
  // your code here
  return string.length
};

function firstCharacter (string) {
  // your code here
  return string[0]
};

function firstCharacters (string, n) {
  // your code here
  if (string.length < n) {
    return 'ERROR!'
  } else {
    return string.slice(0, n)
  }
  
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
