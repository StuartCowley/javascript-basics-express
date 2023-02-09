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
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => {
    return person.age;
  });
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => {
    return person.name === name;
  });
};

const findHondas = cars => {
  return cars.filter(car => {
    return car.manufacturer === 'Honda';
  });
};

const averageAge = people => {
  const ageSum = people.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  return ageSum / people.length;
};

const createTalkingPerson = (name, age) => {
  function intro(stranger) {
    return `Hi ${stranger}, my name is ${name} and I am ${age}!`;
  }

  const person = {
    name: name,
    age: age,
    introduce: intro
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
