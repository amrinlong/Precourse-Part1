// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
const addTwo = number => number + 2;

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
const add = (num1, num2) => num1 + num2;

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
const addd = (value1, value2, value3) => value1 + value2 + value3;


// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
const subtract = (n1, n2) => n1-n2;


// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
const multiplyByTwo = (numero) => numero * 2;


// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
const multiply = (val1, val2) => val1 * val2;


// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
const multiplyy = (a, b, c) => a * b * c;


// returns the square of the inputted number
// ex: square(5); -> 25
const square = value => value * value;


// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
const isOdd = num => num % 2 !== 0;
	// if (num%2 === 1) {
	// 	return console.log(`true`)
	// } else {return console.log(`false`)}


// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
const isNegative = num => num < 0;


// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
const positive = num => Math.abs(num);


// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
const isNumber = value => typeof value === 'number';


// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
const isArray = value => Array.isArray(value);


// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
const isObject = value => typeof value === 'object';


// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
const isNull = value => value === null;
