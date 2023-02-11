const getNthElement = (index, array) => {
  if (index >= array.length) { return array[index - array.length] }
  return array[index]
}

const arrayToCSVString = array => {
  return array.toString()
}

function csvStringToArray (string) {
  return string.split(',', 5)
}

const addToArray = (elementX, arrayX) => {
  arrayX.push(elementX)
}

const addToArray2 = (NEWelement, ORIGarray) => {
  const addToArray3 = ORIGarray.concat(NEWelement)
  return addToArray3
}

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
}

const numbersToStrings = numbers => {
  return numbers.map(String)
}

const uppercaseWordsInArray = strings => {
  return strings.map(function (A) { return A.toUpperCase() })
}

const reverseWordsInArray = strings => {
  return strings.map(function (A) { return A.split('').reverse().join('') })
}

const onlyEven = numbers => {
// const numbers2 = numbers.filter(a => a % 2 === 0); works, replaced filter with map,but this gives T or F//
  return numbers.filter(a => a % 2 === 0)
}

// splice() method mutates an array and returns the removed items. Splice example with no mutation.
const removeNthElement2 = (index, array) => {
  const newArray = [...array]
  if (index >= 0) {
    newArray.splice(index, 1)
    return newArray
  }
}

const elementsStartingWithAVowel = strings => {
  const results = []
  for (let i = 0; i < strings.length; i++) {
    if ((strings[i].startsWith('a')) || (strings[i].startsWith('e')) || (strings[i].startsWith('i')) ||
    (strings[i].startsWith('o')) || (strings[i].startsWith('u')) || (strings[i].startsWith('A')) ||
    (strings[i].startsWith('E')) || (strings[i].startsWith('I')) || (strings[i].startsWith('O')) ||
    (strings[i].startsWith('U'))) { results.push(strings[i]) }
  }
  return results
}

const removeSpaces = string => {
  return string.replace(/\s+/g, '') // Research this solution
}

const sumNumbers = numbers => {
  const sum = numbers.reduce((acc, number) => {
    return acc + number
  })
  return sum
}

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

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
}
