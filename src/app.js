const express = require('express');

const app = express();

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const n = req.query.length;
  res.status(200).json({
    result: n
      ? strings.firstCharacters(req.params.string, n)
      : strings.firstCharacter(req.params.string),
  });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a, b } = req.params;
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.add(+a, +b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a, b } = req.params;
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.subtract(+b, +a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(+a, +b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).json({ result: 0 });
  }
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: numbers.divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).json({ result: 0 });
  }
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: numbers.remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: booleans.negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: booleans.truthiness(value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  const { a } = req.params;
  if (Number.isNaN(+a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: booleans.isOdd(+a) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { char, string } = req.params;
  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else res.status(200).json({ result: booleans.startsWith(char, string) });
});

app.post('/arrays/element-at-index/:i', (req, res) => {
  const { i } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: arrays.getNthElement(i, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrays.arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { value, array } = req.body;
  res.status(200).json({ result: arrays.addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrays.elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const { index } = req.query;
  if (!index) {
    res.status(200).send({ result: arrays.removeNthElement2(0, array) });
  } else arrays.removeNthElement(index, array);
  res.status(200).json({ result: array });
});

module.exports = app;
