const getNthElement = (index, array) => {
  if (index > array.length - 1) {
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
  const newarray = array.concat(element);
  return newarray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  const string1 = numbers.toString();
  return string1.split(',');
};

const uppercaseWordsInArray = strings => {
  const uppercasearray = [];
  for (let n = 0; n < strings.length; n += 1) {
    uppercasearray[n] = strings[n].toUpperCase();
  }
  return uppercasearray;
};

const reverseWordsInArray = strings => {
  const newarray = [];
  let newstring = [];
  for (let n = 0; n < strings.length; n += 1) {
    // Take strings[n] and make it an array
    newstring = strings[n].split('');
    // Reverse the array
    newstring.reverse();
    // Change the array back into a string
    const reversedstring = newstring.join('');
    // Add it to the array of reversed strings
    newarray[n] = reversedstring;
  }
  return newarray;
};

const onlyEven = numbers => {
  const evennumbers = numbers.filter(number => number % 2 === 0);
  return evennumbers;
};

const removeNthElement2 = (index, array) => {
  const firsthalf = array.slice(0, index);
  const secondhalf = array.slice(index + 1);
  const newarray = firsthalf.concat(secondhalf);
  return newarray;
};

const elementsStartingWithAVowel = strings => {
  const newstring = strings.filter(word => {
    const lowercase = word.toLowerCase();
    console.log(lowercase);
    if (
      lowercase.charAt(0) === 'a' ||
      lowercase.charAt(0) === 'e' ||
      lowercase.charAt(0) === 'i' ||
      lowercase.charAt(0) === 'o' ||
      lowercase.charAt(0) === 'u'
    ) {
      return true;
    }
    return false;
  });
  console.log(newstring);
  return newstring;
};

const removeSpaces = string => {
  const splitstring = string.split(' ');
  const nospaces = splitstring.join('');
  return nospaces;
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((acc, currentvalue) => {
    return acc + currentvalue;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort(
    //  Note if a-b is negative (if a is smaller) it returns true, so the values stay put)
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
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
