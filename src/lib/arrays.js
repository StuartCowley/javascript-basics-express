const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',', 5);
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const numtoString = numbers.map(num => {
    return String(num);
  });
  return numtoString;
};

const uppercaseWordsInArray = strings => {
  function capitalizeWords(strings) {
    return strings.map(element => {
      return element.toUpperCase();
    });
  }
  return capitalizeWords(strings);
};

const reverseWordsInArray = strings => {
  return strings.map(function(A) {
    return A.split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(a => a % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const nthElement = [...array];
  if (index >= 0) {
    nthElement.splice(index, 1);
    return nthElement;
  }
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    return string.match(/^[aeiou]/gi);
  });
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  });
  return total;
};

const sortByLastLetter = strings => {
  function endComparator(a, b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return strings.sort(endComparator);
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
