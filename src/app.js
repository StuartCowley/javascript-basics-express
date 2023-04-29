const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply } = require('./lib/numbers');

const app = express();

app.use(express.json());

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

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  }

  res.status(200).json({
    result: add(a, b),
  });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  }

  res.status(200).json({
    result: subtract(b, a),
  });
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (Object.keys(req.body).length < 2) {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({
      error: 'Parameters "a" and "b" must be valid numbers.',
    });
  }

  res.status(200).json({
    result: multiply(a, b),
  });
});

module.exports = app;
