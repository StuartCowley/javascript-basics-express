# JavaScript Basics in Express

A simple Express API that contains a set of endpoints for manipulating arrays, booleans, and numbers.

## Requirements

To run the project, you will need node.js and npm.

To install the project, clone the repository, navigate to the project directory, and run the following command:

```bash
npm install
```

## Running tests

You can run tests with the `npm test` command and start the server with `npm run start`.

## Endpoints

The API contains the following endpoints:

`/arrays/remove-element`
- Method: POST
- Parameters: index (query parameter), array (request body)
- Description: Removes an element from the array at the specified index and returns the new array.

`/arrays/starts-with-vowel`
- Method: POST
- Parameters: array (request body)
- Description: Returns an array of elements that start with a vowel.

`/arrays/to-string`
- Method: POST
- Parameters: array (request body)
- Description: Converts the array to a string, separated by commas.

`/arrays/element-at-index/:index`
- Method: POST
- Parameters: index (route parameter), array (request body)
- Description: Returns the element at the specified index of the array.

`/arrays/append`
- Method: POST
- Parameters: value (request body), array (request body)
- Description: Appends the specified value to the array and returns the new array.

`/booleans/:string/starts-with/:char`
- Method: GET
- Parameters: string (route parameter), char (route parameter)
- Description: Returns true if the specified string starts with the specified character.

`/booleans/is-odd/:num`
- Method: GET
- Parameters: num (route parameter)
- Description: Returns true if the specified number is odd.

`/booleans/truthiness`
- Method: POST
- Parameters: value (request body)
- Description: Determines the truthiness of the input value and returns a boolean value of true or false in the response.

`/booleans/negate`
- Method: POST
- Parameters: value (request body)
- Description: Negates the input value and returns the boolean opposite in the response.

`/numbers/add/:a/and/:b`
- Method: GET
- Parameters: a and b (request params)
- Description: Adds two numbers together and returns the sum in the response.

`/numbers/subtract/:b/from/:a`
- Method: GET
- Parameters: a and b (request params)
- Description: Subtracts one number from another and returns the difference in the response.

`/numbers/multiply`
- Method: POST
- Parameters: a and b (request body)
- Description: Multiplies two numbers together and returns the product in the response.

`/numbers/divide`
- Method: POST
- Parameters: a and b (request body)
- Description: Divides one number by another and returns the quotient in the response.

`/numbers/remainder`
- Method: POST
- Parameters: a and b (request body)
- Description: Calculates the remainder of dividing one number by another and returns the result in the response.

`/strings/hello/:string`
- Method: GET
- Parameters: string (request params)
- Description: Returns a greeting message with the input string in the response.

`/strings/upper/:upper`
- Method: GET
- Parameters: upper (request params)
- Description: Converts the input string to uppercase and returns it in the response.

`/strings/lower/:lower`
- Method: GET
- Parameters: lower (request params)
- Description: Converts the input string to lowercase and returns it in the response.

`/strings/first-characters/:firstp`
- Method: GET
- Parameters: firstp (request params), length (request query)
- Description: Returns the first n characters of the input string, where n is the value of the length query parameter. If length is not provided, returns the first character of the string in the response.
