const express = require('express');

const app = express();
const { uppercase, lowercase } = require('./lib/strings');

// const {
//   sayHello,
//   uppercase,
//   lowercase,
//   countCharacters,
//   firstCharacter,
//   firstCharacters,
// } = require('./src/lib/strings');

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

module.exports = app;
