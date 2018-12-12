/*

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

*/

//defining variables and array of numbers

var numbers = [10, 15, 3 ,7];
var k = 17;

//Function for sum and comparison with k returning true if matches

function addAndCompareNumbers(num1, num2) {
	var sum = num1 + num2;

	if (sum === k) {
		return true;
	};
};

// function for invoking comparison of each element of the array

var passValues = function() {

	for (i = 0; i < numbers.length; i++) {
		var result = addAndCompareNumbers(numbers[i], numbers[i++]);
		console.log(result);
	};
};

/* function for reorganizing of the numbers array so that we will 
have pushed first element to the end and removing. */

function organizeNumbers() {

	var firstValue = numbers[0];
	numbers.push(firstValue)
	numbers.shift();
}

// Loop for invoking further functions

for (i = 0; i < numbers.length; i++) {
	passValues();
	organizeNumbers();
};
