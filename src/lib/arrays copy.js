const getNthElement = (index, array) => { 
  return array[index % array.length]
};

const arrayToCSVString = array => {
  return array.toString()
};

const csvStringToArray = string => {
  return string.split(",")
  
};

const addToArray = (element, array) => {
 array.push(element)
};

const addToArray2 = (element, array) => {
  return [...array, element]
};

const removeNthElement = (index, array) => {
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
 return numbers.map(String)
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(str => str.split("").reverse().join(""))
};

const onlyEven = numbers => {
  return numbers.filter((num) => num % 2 === 0)
}

const removeNthElement2 = (index, array) => {
  // create a new array to hold the result 
 const result = [];
 // loop through the current array
 for (let i = 0; i < array.length; i++){
  // skip the nth element here
  if (i !== index){
    result.push(array[i])
  }
 }
 // return the result array with the element removed
 return result 
};

const elementsStartingWithAVowel = strings => {
  const vowelWords = strings.filter((word) => {
    const firstLetter = word.charAt(0).toLowerCase();
    return ["a", "e", "i", "o", "u"].includes(firstLetter)
  })
  return vowelWords
};

const removeSpaces = string => {
  return string.replace(/\s/g, '')
  // the expression uses the \s to represent spaces and the /g to represent a global search. We then replace them with the '' 
};

const sumNumbers = numbers => {
  const initialValue = 0;
  const total = numbers.reduce((
    accumulator,currentValue) => accumulator + currentValue, initialValue
    )
    return total 
};

const sortByLastLetter = strings => {
  const sortByLastChar = (a, b) => a.charAt(a.length -1 ) > b.charAt(b.length - 1) ? 1 : -1;
  strings.sort(sortByLastChar)
  return strings 
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
