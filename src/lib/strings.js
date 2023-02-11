function sayHello(string) {
  return `Hello, ${string}!`;
}

function uppercase(string) {
  return string.toUpperCase();
}

function lowercase(string) {
  return string.toLowerCase();
}

function countCharacters(string) {
  return string.length;
}

function firstCharacter(string) {
  return string.slice(0, 1);
}

function firstCharacters(string, n) {
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
