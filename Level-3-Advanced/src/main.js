// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
\	for (let i = 0; i < array.length; i++) { // i = 0
		callback(array[i], i, array) // 2
	}
}

// const testArr = [1, 3, 5, 7]

// function logNumPlus(num) {
// 	console.log(num + 1)
// }

// console.log(forEach(testArr, logNumPlus))

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
	let resultsArr = []
	for (let i = 0; i < array.length; i++) {
		resultsArr.push(callback(array[i]))
	}
	return resultsArr
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) { // [1, 2, 3, 4]; item => !callback(item)
	let results = [] // 
	for (let i = 0; i < collection.length; i++) { //
		if (callback(collection[i])) { //
			results.push(collection[i])
		}
	}
	return results
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) { //{a:1, b:2, c:3, d:4} [1, 2, 3, 4]; isEven
  if (Array.isArray(collection)) {
    return filter(collection, item => !callback(item))
  } else {
    const resultsObj = {};
  
    for (let shrimp in collection) {
      if (!callback(collection[shrimp])) {
        resultsObj[shrimp] = collection[shrimp];
      }
    }
    
    return resultsObj;
  }
} 

// const testArr = [1, 2, 3, 4]
// const testObj = {a:1, b:2, c:3, d:4}

// function myCB(element) {
// 	return element % 2 !== 0
// }
// console.log(reject(testArr, myCB))
// console.log(reject(testObj, myCB))


// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1,4,4]); → [1,2]
function uniq(array) {
  const results = {}; 

  return array.filter(item => {
    if (results[item]) return false;
    else {
      results[item] = true;
      return true;
    }
  })
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } 
  }
  return -1;    
}

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(cb) {
  let results = 0;
  let firstRun = true;
  
  function oneRun(input) {
    if (firstRun) {
      results = cb(input)
      firstRun = false;
    }
    return results;
  }
  return oneRun;
}

const multBy2 = (input) => {
  return input * 2
}

// function multBy2(input) {
  
// }

// const multiplyByTwoOnce = once(multBy2)
// console.log(multiplyByTwoOnce(5))

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.

// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  let results;
  
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      results = array[i]
    } else {
      results = results + array[i]
    }
  }
  
  return results
}

const testArr = [1, 2, 3]

// function myCB(element) {
//   return element * 2
// }

console.log(reduce(testArr))

// function test(red, white, blue) {
//   console.log(red)
//   console.log(white)
//   console.log(blue)
// }

// test(1, 2, 3)
// test(1, 2)

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
	//CODE HERE

}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {

}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {

}
