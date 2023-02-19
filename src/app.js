const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();
const router = express.Router();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Strings

app.get('/strings/hello/:str', (req, res) => {
  const string = req.params.str;
  res.status(200).json({ result: sayHello(string) });
});

app.get('/strings/upper/:str', (req, res) => {
  const string = req.params.str;
  res.status(200).json({ result: uppercase(string) });
});

app.get('/strings/lower/:str', (req, res) => {
  const string = req.params.str;
  res.status(200).json({ result: lowercase(string) });
});

app.get('/strings/first-characters/:str', (req, res) => {
  const string = req.params.str;
  const i = req.query.length;
  const n = i > 0 ? i : 1;
  res.status(200).json({ result: firstCharacters(string, n) });
});

// Numbers

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const number1 = parseInt(req.params.num1);
  const number2 = parseInt(req.params.num2);
  return Number.isNaN(number1) || Number.isNaN(number2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(number1, number2) });
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const number1 = parseInt(req.params.num1);
  const number2 = parseInt(req.params.num2);
  return Number.isNaN(number1) || Number.isNaN(number2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(number2, number1) });
});

app.post('/numbers/multiply', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    const answer =
      isNaN(req.body.a) || isNaN(req.body.b)
        ? res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
        : res.status(200).json({ result: multiply(req.body.a, req.body.b) });
    return answer;
  }
});

app.post('/numbers/divide', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  }
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  return isNaN(req.params.number)
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(req.params.number) });
});

app.get('/booleans/:string/starts-with/:letter', (req, res) => {
  return req.params.letter.length === 1
    ? res.status(200).json({ result: startsWith(req.params.letter, req.params.string) })
    : res.status(400).json({ error: 'Parameter "character" must be a single character.' });
});

// Arrays

app.post('/arrays/element-at-index/:number', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.number, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});

module.exports = app;
