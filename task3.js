/*

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

*/

var inArray = [1, 2, 3, 4, 5];
var outArray = [];
var resultOfMultiply;

for (i = 0; i < inArray.length; i++) {

	var pushedValue = calculateElement(i, inArray);
	outArray.push(pushedValue);

};

function calculateElement(element,array) {
	var resultOfMultiply = 0;
	array.splice(element,1);
	console.log(array);

		for (i = 0; i < array.length; i++) {
			resultOfMultiply += (array[i]*array[i+1]);
		};
};