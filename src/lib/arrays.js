const getNthElement = (index, array) => {
  if (array > array.length - 1) {
    index -= array.length;
    return array[index];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(item => item.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  return numbers.filter(a => numbers.indexOf(a) % -2 === 1);
};

const removeNthElement2 = (index, array) => {
  return array.filter(a => a !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /⌃[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
