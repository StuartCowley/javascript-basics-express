const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.id),
  });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).json({
    result: uppercase(req.params.id),
  });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200).json({
    result: lowercase(req.params.id),
  });
});

app.get('/strings/first-characters/:id', (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.id, req.query.length),
  });
});

module.exports = app;
