const express = require('express');
// const bodyParser = require('body-parser');

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

const app = express();

app.use(express.json());

// STRINGS //
app.get('/strings/hello/:thing', (req, res) => {
  const { thing } = req.params;
  res.status(200);
  res.send({ result: strings.sayHello(thing) });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200);
  res.send({ result: strings.uppercase('hello') });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200);
  res.send({ result: strings.lowercase('hello') });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;
  res.status(200);
  if (length) {
    res.send({ result: strings.firstCharacters(string, length) });
  }
  res.send({ result: strings.firstCharacter(string) });
});

// NUMBERS //

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a } = req.params;
  const { b } = req.params;
  if (isNaN(a) || isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200);
  res.send({ result: numbers.add(+a, +b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a } = req.params;
  const { b } = req.params;
  if (isNaN(a) || isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200);
  res.send({ result: numbers.subtract(Number(b), Number(a)) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200);
  res.send({ result: numbers.multiply(Number(b), Number(a)) });
});

// BOOLEANS //
app.post('/booleans/negate', (req, res) => {
  res.status(200);
  const { value } = req.body;
  res.send({ result: booleans.negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200);
  const { value } = req.body;
  res.send({ result: booleans.truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;
  if (isNaN(number)) {
    res.status(400);
    res.send({ error: 'Parameter must be a number.' });
  }
  res.status(200);
  res.send({ result: booleans.isOdd(number) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;
  if (char.length > 1) {
    res.status(400);
    res.send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200);
  res.send({ result: booleans.startsWith(char, string) });
});

// ARRAYS //

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200);
  const { index } = req.params;
  const { array } = req.body;
  // const { index } = req.body;
  res.send({ result: arrays.getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200);
  const { array } = req.body;
  res.send({ result: arrays.arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200);
  const { array, value } = req.body;
  res.send({ result: arrays.addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200);
  const { array } = req.body;
  res.send({ result: arrays.elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200);
  const { array } = req.body;
  const { index } = req.query;
  if (index > 0) {
    const newArr = arrays.removeNthElement2(+index, array);
    res.send({ result: newArr });
  } else {
    res.send({ result: arrays.removeNthElement2(0, array) });
  }
});

module.exports = app;
