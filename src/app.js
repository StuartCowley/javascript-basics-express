const express = require('express');

const { sayHello } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');

const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const { getNthElement, arrayToCSVString } = require('./lib/arrays');

const app = express();
app.use(express.json());

// strings section

app.get('/strings/hello/world', (_, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  // const result = req.params.string.toUpperCase();
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  // const result = req.params.string.toLowerCase();
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  // const result = req.params.string.charAt(0);
  res.status(200).json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const n = req.query.length;
  res.status(200).json({ result: firstCharacters(req.params.string, n) });
  // res.status(200).json({ result: 'sd32' });
});

// numbers section

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: subtract(b, a) });
  console.log({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters a and b are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  console.log({ result: multiply(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  const parsedA = parseInt(a, 10);
  const parsedB = parseInt(b, 10);

  res.status(200).json({ result: multiply(parsedA, parsedB) });
  console.log({ result: multiply(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (req.body.a === 0) {
    res.status(200).json({ result: req.body.a });
  }
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
  console.log({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (req.body.a === 0) {
    res.status(200).json({ result: req.body.a });
  }
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
  console.log({ result: remainder(a, b) });
});

// app.get('/numbers/add/:a/and/:b', (req, res) => {
//   const a = parseFloat(req.params.a);
//   const b = parseFloat(req.params.b);
//   console.log(a, b);
//   if (isNaN(a) || isNaN(b)) {
//     res.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
//   const result = a + b;
//   res.status(200).json({ result });
// });

// booleans section

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const value = parseInt(req.params.number, 10);

  if (isNaN(value)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(value) });
  }
});

app.get('/booleans/:word/starts-with/:character', (req, res) => {
  const { word } = req.params;
  const { character } = req.params;

  if (character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(character, word) });
  }
});

// arrays section

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;

  res.status(200).json({ result: removeNthElement2(index, array) });
});

module.exports = app;
