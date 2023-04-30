const createPerson = (name, age) => {
  const person = Object();
  person.name = name;
  person.age = age;
  return person;
};

const getName = object => {
  const name = object.name;
  return name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = people.map(person => {
    return person.age;
  });
  return ages;
};

const findByName = (name, people) => {
  console.log(name);
  const find = people.find(person => person.name === name);
  console.log(find);
  return find;
};

const findHondas = cars => {
  const hondas = cars.filter(car => car.manufacturer === 'Honda');
  console.log(hondas);
  return hondas;
};

const averageAge = people => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((acc, currentvalue) => {
    return acc + currentvalue;
  }, 0);
  const average = sum / ages.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
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
