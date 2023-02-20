const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});
app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num2);
  const num2 = parseInt(req.params.num1);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num1, num2) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(a, b) });
  }
});

// HAVE A LOOK AND RE VISIT THE STRINGS
app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  const result = array[index];
  res.status(200).json({ result });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  const result = array[index];
  res.status(200).json({ result });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  const result = array.join(',');
  res.status(200).json({ result });
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;
  const result = [...array, value];
  res.status(200).json({ result });
});

const startsWithVowel = str => {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0]);
};

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  const result = array.filter(str => startsWithVowel(str));
  res.status(200).json({ result });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const [, ...result] = array;
  res.status(200).json({ result });
});

module.exports = app;
