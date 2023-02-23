const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
 return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65 ? true:false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(findPerson => findPerson.name === name);
};

const findHondas = cars => {
 return cars.filter(findManufacturer => findManufacturer.manufacturer === 'honda');
};

const averageAge = people => {
  return people.reduce((total, person) => {
    return total + person.age}, 0)/people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: (name) => {
      return `Hi ${name}, my name is ${person.name} and I am ${person.age}!`
    }
  };
  return person;
};

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
};
