const createPerson = (name, age) => {
  const person = {};
  person.name = name;
  person.age = age;
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  if (property === 'age') {
    return object.age;
  }
  return object.name;
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
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
  function getAges(input, field) {
    var output = [];
    for (var i = 0; i < input.length; i++) output.push(input[i][field]);
    return output;
  }
  var result = getAges(people, 'age');
  return result;
};

const findByName = (name, people) => {
  return people.find(element => element.name === name);
};

const findHondas = cars => {
  return cars.filter(element => element.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((addAge, currentPerson) => {
    return addAge + currentPerson.age;
  }, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function(person) {
      return (
        'Hi ' +
        person +
        ', my name is ' +
        this.name +
        ' and I am ' +
        this.age +
        '!'
      );
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
