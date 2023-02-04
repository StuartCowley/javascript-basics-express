const getNthElement = (index, array) => {
  if (index>= array.length){
    return array[index-array.length]
  }
  return (array[index]);
 
};

//const getNthElement = (index, array) => {
  //const newIndex = index < array.length ? index : index - array.length;

  //return array[newIndex];
//};

const arrayToCSVString = array => {
  return array.join();
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
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

//const numbersToStrings = (numbers) => numbers.map(number => String(number));

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings =>strings.split('').reverse().join(''));
};

//return strings.map(strings => [...strings].reverse().join('')); for special characters

const onlyEven = numbers => {
  return numbers.filter(number => number%2===0)
};


const removeNthElement2 = (index, array) => {
  return array.filter ((item,itemIndex) => itemIndex !== index);
}
//return array.filter(array => [...array ] !== index);
//return array.filter(array => array.splice(index,1));
//return array.filter(array => [...array] === index);

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => /^[aeiou]/i.test(strings));
};

//return strings.filter(strings => /^[aeiou]/i.test(strings));

const removeSpaces = string => {
  return string.replace(/\s/g,'');
};

//const removeSpaces = (string) => string.split(' ').join('');

const sumNumbers = numbers => {
 return numbers.reduce((total,item)=> total + item);
};



const sortByLastLetter = strings => {
  return strings.sort((a,b)=> a.charCodeAt(a.length-1)- b.charCodeAt(b.length-1));
};

//const sortByLastLetter = (strings) => {
  //const reverseString = (item) => item.split('').reverse().join('');
  
  //return strings.map(reverseString).sort().map(reverseString);
//};

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
