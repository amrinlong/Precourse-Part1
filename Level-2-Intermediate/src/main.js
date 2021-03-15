// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
	let resultArr = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			resultArr.push(array[i])
		}
	}
	return resultArr
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
const returnEvens = array => {
	let resultArr = []

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			resultArr.push(array[i])
		}
	}

	return resultArr 
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
	let highNum = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] > highNum) {
			highNum = array[i]
		}
	}
	return highNum
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
const trim = string => string.trim(string);

// returns an empty array object. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
  let emptyObj = {};

  emptyObj.length = 0;

  emptyObj.push = function (item) {
    emptyObj[emptyObj.length] = item
    emptyObj.length++
  };

  emptyObj.pop = function () {
    let storedItem = emptyObj[emptyObj.length - 1]
    delete emptyObj[emptyObj.length - 1]
    emptyObj.length--
    return storedItem
  };

  emptyObj.shift = function () { // ['yellow', 'red', 'blue']  //length = 3 [0: 'yellow', 1: 'red', 2: 'blue']
	let storedItem = emptyObj[0] // = 'yellow'
	for (let i = 1; i < emptyObj.length; i++) { // i = 2
		emptyObj[i - 1] = emptyObj[i] // [0: 'red', 1: 'blue']
	}
	delete emptyObj[emptyObj.length - 1] // delete 2: 'blue'
	emptyObj.length--
	return storedItem // 'yellow'
  };

  emptyObj.unshift = function (val) { 
	for (let i = emptyObj.length; i > 0; i--) { 
		emptyObj[i] = emptyObj[i - 1] 
	}
	emptyObj[0] = val	
	emptyObj.length++
  };

  return emptyObj;
}

const fauxArr = createArray()
fauxArr.push('red')
console.log(fauxArr.length)
fauxArr.push('blue')
console.log(fauxArr.length)
console.log(fauxArr)
fauxArr.unshift('yellow')
console.log(fauxArr.length)
console.log(fauxArr)
console.log('returned from shift ->', fauxArr.shift())
console.log('this -> ', fauxArr)
