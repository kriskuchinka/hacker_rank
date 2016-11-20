// Hacker Rank Test Challenge
// STDIN was the variable to use in the code
//	This code doesn't stipulate what STDIN value is
// Successfully Passed!

var STDIN;
var STDIN10 = STDIN + 10;
var numbers = [];

for (var i = STDIN; i <= STDIN10; i++) {
	numbers.push(i);
}

finalString = numbers.join(" then ");
console.log(numbers);
console.log(finalString);
