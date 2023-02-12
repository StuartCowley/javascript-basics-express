const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
  // return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array = array.push(element);
};

const addToArray2 = (element, array) => {
  newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  // return numbers.map(String);
  const numString = numbers.map(number => {
    return String(number);
  });
  return numString;
};

const uppercaseWordsInArray = strings => {
  // your code here
  const newArray = strings.map(string => {
    return string.toUpperCase();
  });
  return newArray;
};

const reverseWordsInArray = strings => {
  // const reverseString = strings.map(string =>
  //   string
  //     .split('')
  //     .reverse()
  //     .join('')
  // );

  const reverseString = strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
  return reverseString;
};

const onlyEven = numbers => {
  const evenOnly = numbers.filter(number => {
    if (number % 2 === 0) {
      return number;
    }
  });
  return evenOnly;
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
  const sum = numbers.reduce(number => {});
};

const sortByLastLetter = strings => {
  // your code here
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
  sortByLastLetter
};
