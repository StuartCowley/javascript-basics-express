const createPerson = (name, age) => {
  // your code here
  return person = {
    name:name,
    age:age,
  };
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object.hasOwnProperty(property) == true) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) {
    return true; 
  } else {
    return false;
  }
};

const getAges = people => {
  // your code here
  let arrAges = []
  for (let i = 0; i < people.length; i++) {
      arrAges.push(people[i].age);
    };
  return arrAges;
};

const findByName = (name, people) => {
  // your code here
  for (let i = 0; i < people.length; i++) {
    if (people[i].name == name) {
      return people[i];
    };
  };
};

const findHondas = cars => {
  // your code here
  let hondaCars = []
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer == 'Honda') {
      hondaCars.push(cars[i]);
    };
  };
  return hondaCars;
};

const averageAge = people => {
  // your code here
  return people.reduce((acc,a) => 
  a.age + acc,0)/people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const person = {
    name,
    age,
    introduce: function introduction(name){
      return 'Hi ' + name + ', my name is ' + 
      this.name + ' and I am ' + this.age + '!';
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
