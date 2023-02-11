const express = require('express');
const { sayHello } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  const result = req.params.string.toUpperCase();
  res.status(200).json({ result });
});

app.get('/strings/lower/:string', (req, res) => {
  const result = req.params.string.toLowerCase();
  res.status(200).json({ result });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const result = req.params.string.charAt(0);
  res.status(200).json({ result });
});

// app.get('/strings/first-characters/:string', (req, res) => {
//   const string = req.params.string;
//   const length = Number(req.query.length) || 1;
//   const result = string.slice(0,length);
//   res.status(200).json({ result });
// });

// app.get('/strings/first-characters/:string', (req, res) => {
//   const { string } = req.params;
//   const { length } = req.query;

//   const result = string.slice(0, length);
//   res.status(200).json({ result });
// });

// app.get('/strings/first-characters/:string', (req, res) => {
//   const { string } = req.params;
//   const length = parseInt(req.query.length) || string.length;
//   const result = string.substring(0, length);
  
//   res.status(200).json({ result });
// });

app.get('/strings/first-characters/:string', (req, res) => {
  const n = req.query.length;
  console.log(req);
  // res.status(200).json({ result: firstCharacters(req.params.string, n) });
  res.status(200).json({ result: 'sd32' });
});

module.exports = app;
