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
// const result = arr.some((item) => item > 2);
// console.log(result);

// What is Includes?
// Includes is a method that determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Syntax: arr.includes(valueToFind[, fromIndex])
// Parameters: valueToFind: The value to search for.
// const result = arr.includes(2);
// console.log(result);

// What is IndexOf?
// IndexOf is a method that returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Syntax: arr.indexOf(searchElement[, fromIndex])
// Parameters: searchElement: Element to locate in the array.
// const result = arr.indexOf(2);
// console.log(result);

// What is LastIndexOf?
// LastIndexOf is a method that returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// Syntax: arr.lastIndexOf(searchElement[, fromIndex])
// Parameters: searchElement: Element to locate in the array.
// const result = arr.lastIndexOf(2);
// console.log(result);

// What is Join?
// Join is a method that creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// Syntax: arr.join([separator])
// Parameters: separator(Optional): A string used to separate one element of the array from the next in the resulting String. If omitted, the array elements are separated with a comma.
// const result = arr.join("-R-");
// console.log(result);

// What is Slice?
// Slice is a method that returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
// Syntax: arr.slice([begin[, end]])
// Parameters: begin(Optional): Zero-based index at which to begin extraction. A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. If begin is undefined, slice begins from index 0. If begin is greater than the length of the sequence, an empty array is returned.
// const result = arr.slice(2, 5);
// console.log(result);

// What is Splice?
// Splice is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// Parameters: start: Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
// const result = arr.splice(2, 5);
// console.log(result);

// What is Reverse?
// Reverse is a method that reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Syntax: arr.reverse()
// Parameters: None.
// const result = arr.reverse();
// console.log(result);

// What is Sort?
// Sort is a method that sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Syntax: arr.sort([compareFunction])
// Parameters: compareFunction(Optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
// const result = arr.sort((a, b) => b - a);
// console.log(result);

// What is Push?
// Push is a method that adds one or more elements to the end of an array and returns the new length of the array.
// Syntax: arr.push(element1[, ...[, elementN]])
// Parameters: elementN: The elements to add to the end of the array.
// const result = arr.push(10);
// console.log(result);

// What is Pop?
// Pop is a method that removes the last element from an array and returns that element. This method changes the length of the array.
// Syntax: arr.pop()
// Parameters: None.
// const result = arr.pop();
// console.log(result);
// console.log(arr);

// What is Shift?
// Shift is a method that removes the first element from an array and returns that removed element. This method changes the length of the array.
// Syntax: arr.shift()
// Parameters: None.
// const result = arr.shift();
// console.log(result);
// console.log(arr);

// What is Unshift?
// Unshift is a method that adds one or more elements to the beginning of an array and returns the new length of the array.
// Syntax: arr.unshift(element1[, ...[, elementN]])
// Parameters: elementN: The elements to add to the front of the array.
// const result = arr.unshift(10,12,15);
// console.log(result);
// console.log(arr);

// What is Fill?
// Fill is a method that changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// Syntax: arr.fill(value[, start[, end]])
// Parameters: value: Value to fill the array with.
// const result = arr.fill(10,2,5);
// console.log(result);
// console.log(arr);

// What is CopyWithin?
// CopyWithin is a method that shallow copies part of an array to another location in the same array and returns it, without modifying its size.
// Syntax: arr.copyWithin(target[, start[, end]])
// Parameters: target: Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
// const result = arr.copyWithin(2,4,6);
// console.log(result);

// What is Flat?
// Flat is a method that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax: var newArray = arr.flat([depth]);
// Parameters: depth(Optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
// const result = arr.flat(1);
// console.log(result);
// console.log(arr)

// What is FlatMap?
// FlatMap is a method that first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.
// Syntax: var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
// return element for new_array
// }[, thisArg])
// Parameters: callback: Function that produces an element of the new Array, taking three arguments:
// currentValue: The current element being processed in the array.
// const result = arr.flatMap((item) => item * 2);
// console.log(result);
// console.log(arr)

// What is From?
// From is a method that creates a new, shallow-copied Array instance from an array-like or iterable object.
// Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
// Parameters: arrayLike: An array-like or iterable object to convert to an array.
// const result = Array.from(arr);
// console.log(result);

// What is Of?
// Of is a method that creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// Syntax: Array.of(element0[, element1[, ...[, elementN]]])
// Parameters: elementN: Elements of which to create the array.
// const result = Array.of(1,2,3,4,5,6);
// console.log(result);

// What is Concat?
// Concat is a method that is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Syntax: var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]])
// Parameters: valueN: Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.
// console.log(arr);
// const result = arr.concat([10, 11, 12]);
// console.log(result);
// console.log(arr);





// What is Array?
// Array is a global object that is used in the construction of arrays; which are high-level, list-like objects.
// Syntax: var fruits = ['Apple', 'Banana'];
// Parameters: None.
// console.log(arr);
