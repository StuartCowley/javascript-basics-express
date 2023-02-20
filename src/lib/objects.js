const createPerson = (name, age) => {
  return {
    name,
    age
  }
}

const getName = object => object.name

const getProperty = (property, object) => (object[property])

const hasProperty = (property, object) =>
  object.hasOwnProperty(property)

const isOver65 = person => person.age > 65

const getAges = people => people.map(person => person.age)

const findByName = (name, people) => people.find(element => element.name === name)

const findHondas = cars => cars.filter(object => object.manufacturer === 'Honda')

function averageAge (people) {
  const totalAge = people.reduce((prevAgeAccumulator, currentValuePerson) => {
    return prevAgeAccumulator + currentValuePerson.age
  }, 0)
  return totalAge / people.length
}
// JavaScript Array Reduce - Programming with Mosh, www.youtube.com/watch?v=g1C40tDP0Bk

const createTalkingPerson = (alias, number) => {
  return {
    name: alias,
    age: number,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${alias} and I am ${number}!`
    }
  }
}
// Use of Template literals (Template strings)

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}
