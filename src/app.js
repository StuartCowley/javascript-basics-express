const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({
    result: sayHello(req.params.string),
  });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({
    result: uppercase(req.params.string),
  });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({
    result: lowercase(req.params.string),
  });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({
    result: firstCharacters(req.params.string, req.query.length),
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

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (b === 0) {
    res.status(400).json({
      error: 'Unable to divide by 0.',
    });
  }
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
    result: divide(a, b),
  });
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (b === 0) {
    res.status(400).json({
      error: 'Unable to divide by 0.',
    });
  }
  if (Object.keys(req.body).length < 2) {
    res.status(400).json({
      error: 'Parameters "a" and "b" are required.',
    });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({
      error: 'Parameters must be valid numbers.',
    });
  }
  res.status(200).json({
    result: remainder(a, b),
  });
});

app.post('/arrays/element-at-index/:i', (req, res) => {
  res.status(200).json({
    result: getNthElement(req.params.i, req.body.array),
  });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({
    result: arrayToCSVString(req.body.array),
  });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({
    result: addToArray2(req.body.value, req.body.array),
  });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({
    result: elementsStartingWithAVowel(req.body.array),
  });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({
    result: removeNthElement(req.query.index, req.body.array),
  });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({
    result: negate(req.body.value),
  });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({
    result: truthiness(req.body.value),
  });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (Number.isNaN(number)) {
    res.status(400).json({
      error: 'Parameter must be a number.',
    });
  }
  res.status(200).json({
    result: isOdd(number),
  });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;

  if (char.length > 1) {
    res.status(400).json({
      error: 'Parameter "character" must be a single character.',
    });
  }
  res.status(200).json({
    result: startsWith(char, string),
  });
});

module.exports = app;
