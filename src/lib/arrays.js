const getNthElement = (index, array) => {
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
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
  return numbers.map(number => String(number));
};

const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase());
};

function reverseWordsInArray(strings) {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join(''),
  );
}

const onlyEven = numbers => {
  return numbers.filter(evenNumber => evenNumber % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArr = [...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiou]/i.test(string));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, current) => acc + current);
};

const sortByLastLetter = strings => {
  const reverseString = item =>
    item
      .split('')
      .reverse()
      .join('');
  return strings
    .map(reverseString)
    .sort()
    .map(reverseString);
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
