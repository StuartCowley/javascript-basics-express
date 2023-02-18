function add (a, b) {
  const result = a + b;
  return result;
}

function subtract (a, b) {
  const result = a - b;
  return result;
}

function multiply (a, b) {
const result = a * b;
return result;  
}

function divide (a, b) {
  const result = a / b;
  return result;
}

function power (a, b) {
  const result = a ** b;
  return result;
}

function round (a) {
    const result = Math.round(a);
   return result;
}

function roundUp (a) {
  const result = Math.ceil(a);
  return result;
}

function roundDown (a) {
  const result = Math.floor(a);
  return result;
}

function absolute (a) {
  const result = Math.abs(a);
  return result;
}

function quotient (a, b) {
return parseInt(a/b); 

}

function remainder (a, b) {
  return parseInt(a%b);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
