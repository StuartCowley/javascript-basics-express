const express = require('express');

const app = express();
const { uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');

const {
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
  remainder,
} = require('./lib/numbers');

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

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a, b } = req.params;
  if (/^-?\d*\.?\d+$/.test(a) && /^-?\d*\.?\d+$/.test(b)) {
    res.status(200).send({ result: add(parseInt(a, 10), parseInt(b, 10)) });
  } else {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
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
