# Express API for JavaScript Basics

This is an Express API that provides functionality for basic JavaScript concepts such as arrays, booleans, numbers, objects, and strings. The API has been developed to work with the previously written javascript-basics code.
Getting started

Make sure you have Visual Studio Code installed and updated to the latest version. Also, ensure that you have the ESLint extension installed and enabled.

## Clone the repository and navigate to the project folder:

```bash

git clone git@github.com:MCRcodes/javascript-basics-express.git
cd javascript-basics-express

```

## Install the dependencies:

```bash

npm install

```

## Copy over your JavaScript Basics code

```css
src
├── app.js
└── lib
    ├── arrays.js
    ├── booleans.js
    ├── numbers.js
    ├── objects.js
    └── strings.js
```

## Running tests

You can run tests with the command:

```bash

npm test

```

## API Endpoints

### Strings

    GET /strings/hello/:string

    GET /strings/upper/:string

    GET /strings/lower/:string

    GET /strings/first-characters/:string

### Numbers

    GET /numbers/add/:a/and/:b

    GET /numbers/subtract/:a/from/:b

    POST /numbers/multiply

    POST /numbers/divide

    POST /numbers/remainder

### Booleans

    POST /booleans/negate

    POST /booleans/truthiness

    GET /booleans/is-odd/:number

    GET /booleans/:string/starts-with/:char

### Arrays

    POST /arrays/element-at-index/:index

    POST /arrays/to-string

    POST /arrays/append

    POST /arrays/starts-with-vowel

    POST /arrays/remove-element

## Error Handling

Errors are returned as JSON objects with an error property containing a descriptive message.
