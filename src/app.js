const express = require('express');

const app = express();

const { sayHello } = require('./strings');
const { uppercase } = require('./strings');
const { lowercase } = require('./strings');
const { firstCharacter } = require('./strings');
const { firstCharacters } = require('./strings');

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const n = req.query.length;
  res.status(200).json({ result: firstCharacters(req.params.length, n) });
});

module.exports = app;
