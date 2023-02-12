const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');

const app = express();
const router = express.Router();

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

module.exports = app;
