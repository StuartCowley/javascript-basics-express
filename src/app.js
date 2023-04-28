const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.id),
  });
});

module.exports = app;
