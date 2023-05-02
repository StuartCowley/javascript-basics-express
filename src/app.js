const express = require('express');

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const length = +req.query.length || 1;
  const result = strings.firstCharacters(string, length);

  res.status(200).send({ result });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a, b } = req.params;
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: numbers.add(+a, +b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a, b } = req.params;
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: numbers.subtract(+b, +a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: numbers.multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).send({ result: 0 });
  }
  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: numbers.divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).send({ result: 0 });
  }
  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: numbers.remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).send({ result: booleans.negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).send({ result: booleans.truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = +req.params.number;
  if (Number.isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  }
  res.status(200).send({ result: booleans.isOdd(number) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string, char } = req.params;
  if (+char.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).send({ result: booleans.startsWith(char, string) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).send({ result: arrays.getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: arrays.arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { value, array } = req.body;
  arrays.addToArray(value, array);
  res.status(200).send({ result: array });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: arrays.elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;
  res.status(200).send({ result: arrays.removeNthElement2(index, array) });
});

module.exports = app;
