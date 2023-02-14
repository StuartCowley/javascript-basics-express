const express = require('express');

const strings = require('./lib/strings');

const app = express();

const helloWorld = {
  result: strings.sayHello,
};

app.get('/strings/hello/:thing', (req, res) => {
  const { thing } = req.params;
  res.status(200);
  res.send({ result: strings.sayHello(thing) });
});

module.exports = app;
