function sayHello(string) {
  return `Hello, ${string}!`;
}

// const sayHello = string => 'Hello, ${string}!';

function uppercase(string) {
  return string.toUpperCase();
}

// const uppercase = string => string.toUpperCase();

function lowercase(string) {
  return string.toLowerCase();
}

// const lowercase = string => string.toLowerCase();

function countCharacters(string) {
  return string.length;
}

// const countCharacters = string => string.length;

function firstCharacter(string) {
  return string.charAt(0);
}

// const firstCharacter = string => string.charAt(0);

function firstCharacters(string, length) {
  return string.substring(0, length);
}

// const firstCharacters = (string,n) => string.slice(0,n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
