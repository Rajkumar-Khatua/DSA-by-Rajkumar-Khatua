const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// console.log(Object.keys(arr));
// console.log(Object.values(arr))
// console.log(Object.entries(arr))
// console.log(arr.splice(0, 2));

// console.log(arr.concat([10, 11, 12]));

// What is Filter?
// Filter is a method that creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: arr.filter(callback(element[, index[, array]])[, thisArg])
// Parameters: callback: Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:

// element: The current element being processed in the array.
// const result = arr.filter((item) => arr.length > 5);
// console.log(result);

// What is Map?
// Map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: arr.map(callback(currentValue[, index[, array]])[, thisArg])
// Parameters: callback: Function that produces an element of the new Array, taking three arguments:

// currentValue: The current element being processed in the array.
// const result = arr.map((item) => item * 2);
// console.log(result);

// What is Reduce?
// Reduce is a method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// Parameters: callback: Function to execute on each element in the array, taking four arguments:

// accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).

// currentValue: The current element being processed in the array.

// index(Optional): The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.

// array(Optional): The array reduce() was called upon.

// initialValue(Optional): Value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.
// const result = arr.reduce((acc, item) => acc + item, 0);
// console.log(result);

// What is Find?
// Find is a method that returns the value of the first element in the provided array that satisfies the provided testing function.
// Syntax: arr.find(callback(element[, index[, array]])[, thisArg])
// Parameters: callback: Function to execute on each value in the array, taking three arguments:

// element: The current element being processed in the array.
// const result = arr.find((item) => item === 5);
// console.log(result);

// What is FindIndex?
// FindIndex is a method that returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// Syntax: arr.findIndex(callback(element[, index[, array]])[, thisArg])
// Parameters: callback: Function to execute on each value in the array, taking three arguments:
// element: The current element being processed in the array.
// const result = arr.findIndex((item) => item === 5);
// console.log(result);

// What is Every?
// Every is a method that tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// Syntax: arr.every(callback(element[, index[, array]])[, thisArg])
// Parameters: callback: Function to test for each element, taking three arguments:
// element: The current element being processed in the array.
// const result = arr.every((item) => item > 5);
// console.log(result);


// What is Some?
// Some is a method that tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// Syntax: arr.some(callback(element[, index[, array]])[, thisArg])
// Parameters: callback: Function to test for each element, taking three arguments:
// element: The current element being processed in the array.
const result = arr.some((item) => item > 5);
console.log(result);