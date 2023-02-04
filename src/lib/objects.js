const createPerson = (name, age) => {
return {
name: name,
age: age
}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true;
  }
  return false;

};

//const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => {
  if (person.age > 65){
    return true;
  }
  return false;
};

// const isOver65 = person => person.age > 65;

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person['name'] === name);
};

// const findByName = (name, people) => people.find(obj => obj.name === name);

const findHondas = cars => {
return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce ((prevAge, currentPerson) => {
    return prevAge + currentPerson.age;
  }, 0);

  return totalAge / people.length;
};


// people.reduce((acc,val)=> {
// return acc + (val.age/length);
//}, 0);
//return people.reduce((total,item)=> total + item);

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: newName => {
      return `Hi ${newName}, my name is ${name} and I am ${age}!`;
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
