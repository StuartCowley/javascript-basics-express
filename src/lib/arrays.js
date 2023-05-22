const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  let newarray = array.concat(element);
  return newarray;
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word => word.split("").reverse().join(""));
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(numbers => numbers % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.slice(0, index).concat(array.slice(index + 1));
};

const elementsStartingWithAVowel = strings => {
  // your code here
  let vowels = /^[aeiou]/i;
return results = strings.filter(strings => vowels.test(strings));
};

const removeSpaces = string => {
  // your code here
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((a, b) => 
  a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
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
