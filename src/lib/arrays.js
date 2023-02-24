const getNthElement = (index, array) => {
  return array[index % array.length];
  // return array[index];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  return array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // return numbers.map(String);
  const numString = numbers.map(number => {
    return String(number);
  });
  return numString;
};

const uppercaseWordsInArray = strings => {
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
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const stringNew = strings.filter(string => {
    const testString = string.toLowerCase();
    return (
      testString[0] === 'a' ||
      testString[0] === 'e' ||
      testString[0] === 'i' ||
      testString[0] === 'o' ||
      testString[0] === 'u'
    );
  });
  return stringNew;
};

const removeSpaces = string => {};

const sumNumbers = numbers => {
  const sum = numbers.reduce(number => {});
};

const sortByLastLetter = strings => {};

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
