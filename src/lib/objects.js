const createPerson = (name, age) => {
  return {
    name,
    age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => name === person.name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const allAges = people.reduce((accAge, currentAge) => {
    return accAge + currentAge.age;
  }, 0);
  return allAges / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    },
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
  createTalkingPerson,
};
