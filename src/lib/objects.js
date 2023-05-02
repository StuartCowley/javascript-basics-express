const createPerson = (name, age) => {
  return {name, age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(a => a.manufacturer === 'Honda');
};

const averageAge = people => {
  const sum = people.reduce(
    (accumulative, current) => accumulative + current.age,
    0
  );
  const avg = sum / people.length;
  return Math.round(avg);
};

const createTalkingPerson = (name, age) => {
  const introduce = otherName => {
    return `Hi ${otherName}, my name is ${name} and I am ${age}!`;
  };
  return {name, age, introduce};
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
