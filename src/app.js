const express = require('express');
const {
  sayHello,
  upperCase,
  lowerCase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.id) });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).send({ result: upperCase(req.params.id) });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200).send({ result: lowerCase(req.params.id) });
});

app.get('/strings/first-characters/:id', (req, res) => {
  const n = req.query.length;
  if (req.query.length) {
    res.status(200).send({ result: firstCharacters(req.params.id, n) });
  } else {
    res.status(200).send({ result: firstCharacter(req.params.id) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  if (Number.isNaN(Number(req.params.a)) || Number.isNaN(Number(req.params.b))) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.status(200).send({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  if (Number.isNaN(Number(req.params.a)) || Number.isNaN(Number(req.params.b))) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.status(200).send({ result: subtract(b, a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.status(200).send({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).send({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (Number(req.body.a) === 0) {
    res.status(200).send({ result: 0 });
  } else {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.status(200).send({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === 0) {
    res.status(200).send({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else if (Number(req.body.a) === 0) {
    res.status(200).send({ result: 0 });
  } else {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.status(200).send({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:id', (req, res) => {
  if (Number.isNaN(Number(req.params.id))) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(req.params.id) });
  }
});

app.get('/booleans/:a/starts-with/:b', (req, res) => {
  if (req.params.b.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).send({ result: startsWith(req.params.b, req.params.a) });
  }
});

module.exports = app;
