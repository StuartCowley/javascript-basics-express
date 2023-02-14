const express = require('express');

const qs = require('qs');
const strings = require('./lib/strings');

const app = express();

app.get('/strings/hello/:thing', (req, res) => {
  const { thing } = req.params;
  res.status(200);

  res.send({ result: strings.sayHello(thing) });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200);
  res.send({ result: strings.uppercase('hello') });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200);
  res.send({ result: strings.lowercase('hello') });
});

// app.setting('query parser', function(str) {
// return qs.parse(str, {
/* custom options */
//   });
// });
app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;
  res.status(200);
  if (length) {
    res.send({ result: strings.firstCharacters(string, length) });
  }
  res.send({ result: strings.firstCharacter(string) });
});

module.exports = app;
