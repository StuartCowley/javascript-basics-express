const express = require('express');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.json({ result: 'Hello, world!' });
});

app.get('/strings/upper/Hello', (req, res) => {
  res.status(200);
  res.json({ result: 'HELLO' });
});

app.get('/strings/lower/hello', (req, res) => {
  res.status(200);
  res.json({ result: 'hello' });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.status(200);
  res.json({ result: 'h' });
});

app.get('/strings/first-characters/:str', (req, res) =>
  res.json({ result: req.params.str.slice(0, req.query.length || undefined) }),
);

module.exports = app;
