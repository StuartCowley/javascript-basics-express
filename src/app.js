const express = require('express');

const { sayHello } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');

const { add, subtract, divide, multiply } = require('./lib/numbers');
// const { subtract } = require('./lib/numbers');
// const { multiply} = require('./lib/numbers');

const app = express();
app.use(express.json());

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
  const { a } = req.body;
  const { b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters a and b are required.' });
  }
  else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  console.log({ result: multiply(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
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
  const { a } = req.body;
  const { b } = req.body;

  if (req.body.a === 0) {
    res.status(200).json({ result: req.body.a});
  }  
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  else if (!a || !b) {
    res.status(400).json({ error: 'Parameters a and b are required.' });
  }
  else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  else {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  }
  console.log({ result: divide(a, b) });
});




// eslint-disable-next-line consistent-return
// app.get('/numbers/add/:a/and/:b', (req, res) => {
//   const a = parseFloat(req.params.a);
//   const b = parseFloat(req.params.b);
//   console.log(a, b);
//   // eslint-disable-next-line no-restricted-globals
//   if (isNaN(a) || isNaN(b)) {
//     res.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
//   const result = a + b;
//   res.status(200).json({ result });
// });

module.exports = app;
