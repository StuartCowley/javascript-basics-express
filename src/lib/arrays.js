const getNthElement = (index, array) => {
  return array[index % array.length];
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
  return (array2 = array.concat(element));
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = String(numbers[i]);
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i]
      .split('')
      .reverse()
      .join('');
  }
  return strings;
};

const onlyEven = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
    } else {
      numbers.splice(i, 1);
    }
  }
  return numbers;
};

const removeNthElement2 = (index, array) => {
  const result = array.slice();
  result.splice(index, 1);
  return result;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < strings.length; i++) {
    if (vowels.includes(strings[i].slice(0, 1).toLowerCase())) {
    } else {
      strings.splice(i, 1);
      i--;
    }
  }
  return strings
    .concat()
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  const intVal = 0;
  return numbers.reduce((acc, curr) => acc + curr, intVal);
};

const sortByLastLetter = strings => {
  function CompFn(a, b) {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  }
  return strings.sort(CompFn);
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
