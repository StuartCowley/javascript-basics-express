const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();
app.use(express.json());

// STRINGS

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

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

module.exports = app;
