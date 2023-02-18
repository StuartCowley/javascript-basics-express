const express = require('express');

const app = express();

const { uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { truthiness, isOdd, startsWith } = require('./lib/booleans');

app.use(express.json());

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string, char } = req.params;
  if (char.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).send({ result: startsWith(char, string) });
  }
});

app.get('/booleans/is-odd/:num', (req, res) => {
  const { num } = req.params;
  if (!/^-?\d*\.?\d+$/.test(num)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(parseInt(num, 10)) });
  }
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  if (truthiness(value) === true) {
    res.status(200).send({ result: true });
  } else {
    res.status(200).send({ result: false });
  }
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  const x = Boolean(value);
  res.status(200).send({ result: !x });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a, b } = req.params;
  if (/^-?\d*\.?\d+$/.test(a) && /^-?\d*\.?\d+$/.test(b)) {
    res.status(200).send({ result: add(parseInt(a, 10), parseInt(b, 10)) });
  } else {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const { a, b } = req.params;
  if (/^-?\d*\.?\d+$/.test(a) && /^-?\d*\.?\d+$/.test(b)) {
    res.status(200).send({ result: subtract(parseInt(a, 10), parseInt(b, 10)) });
  } else {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (/^-?\d*\.?\d+$/.test(a) && /^-?\d*\.?\d+$/.test(b)) {
    const aInt = parseInt(a, 10);
    const bInt = parseInt(b, 10);
    res.status(200).send({ result: multiply(aInt, bInt) });
  } else if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (b == 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (a == 0) {
    res.status(200).send({ result: divide(a, b) });
  } else if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (!/^-?\d*\.?\d+$/.test(a) || !/^-?\d*\.?\d+$/.test(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (b == 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (a == 0) {
    res.status(200).send({ result: remainder(a, b) });
  } else if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (!/^-?\d*\.?\d+$/.test(a) || !/^-?\d*\.?\d+$/.test(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(a, b) });
  }
});

app.get('/strings/hello/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: `Hello, ${string}!` });
});

app.get('/strings/upper/:upper', (req, res) => {
  const { upper } = req.params;
  res.status(200).send({ result: uppercase(upper) });
});

app.get('/strings/lower/:lower', (req, res) => {
  const { lower } = req.params;
  res.status(200).send({ result: lowercase(lower) });
});

app.get('/strings/first-characters/:firstp', (req, res) => {
  const { firstp } = req.params;
  const n = parseInt(req.query.length, 10);
  if (!req.query.length) {
    res.status(200).send({ result: firstCharacter(firstp) });
  } else {
    const x = firstCharacters(firstp, n);
    res.status(200).send({ result: x });
  }
});

module.exports = app;
