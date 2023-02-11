const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object[property] > '';
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.filter(x => x.name).map(x => x.age);
};

const findByName = (name, people) => {
  return people.find(x => x.name === name);
};

const findHondas = cars => {
  return cars.filter(x => x.manufacturer === 'Honda');
};

const averageAge = people => {
  const intVal = 0;
  const added = people.reduce((acc, curr, intVal) => acc + curr.age, intVal);
  return added / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(person) {
      return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`;
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
