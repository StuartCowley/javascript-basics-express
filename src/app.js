const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();
app.use(express.json());

//  ******* Strings Test ******** //

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});
// app.get('/strings/first-characters/:string', (req, res) => {
// res.status(200).json({ result: firstCharacter(req.params.string) });
// });
app.get('/strings/first-characters/:string', (req, res) => {
  let length = 0;
  if (req.query.length) {
    length = req.query.length;
  } else {
    length = 1;
  }
  res.status(200).json({ result: firstCharacters(req.params.string, length) });
});

//  ******** Numbers Test *********//

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});
app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.b, 10);
  const b = parseInt(req.params.a, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(a, b) });
});
app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: multiply(a, b) });
});
app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === 0) {
    res.status(200).send({ result: 0 });
  } else if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: divide(a, b) });
});
app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.params.b, 10);
  const b = parseInt(req.params.a, 10);
  res.status(200).send({ result: divide(a, b) });
});
app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === 0) {
    res.status(200).send({ result: 0 });
  } else if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    // eslint-disable-next-line no-restricted-globals
  } else if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: remainder(a, b) });
});

// ********* Arrays Test ********* //

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
});
app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
});
app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;
  res.status(200).json({ result: addToArray2(value, array) });
});
app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});
app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const index = parseInt(req.query.index, 10);
  if (req.query.index) {
    res.status(200).json({ result: removeNthElement2(index, array) });
  } else {
    res.status(200).json({ result: removeNthElement2(0, array) });
  }
});
// ********* Boolean Test ********* //
app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});
app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});
app.get('/booleans/is-odd/:number', (req, res) => {
  const value = parseInt(req.params.number, 10);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(value)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(value) });
  }
});
app.get('/booleans/:word/starts-with/:character', (req, res) => {
  const { character } = req.params;
  const { word } = req.params;
  // eslint-disable-next-line no-restricted-globals
  if (character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(character, word) });
  }
});

module.exports = app;
