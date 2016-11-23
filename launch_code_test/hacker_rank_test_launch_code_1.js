console.log("JavaScript is Linked");

/*
This was a Hacker Rank test administered to Launch Code Applicants. I did not finish it in the allotted time, but worked on it and completed it afterward.

The point of this problem is read in any array and have it select the largest number, put that number in a new array and remove it from the first array. Then find the smallest number, add to new array and remove it from first array. Repeat until first array is entirely empty.
*/

var n = [25, 27, 6, 5, 8, 9, 1000, 28, 32, 985, 28, -1];

// use built in function name to perform desired task
function wiggleArrangeArray(intArr) {
    // Find length of original array
    var original_length = n.length;
    	// Use for debugging
		// console.log("The length of the array is: " + original_length);
    // Create a new array to put numbers into
    new_array = [];
	// Set initial flag variable and value 
	flag = 0;
    
    for (i = 0; i = n.length; i++) {
	   		// Use for debugging
	   		// console.log("Inside loop.");
   			// console.log(n);
		var max_number = Math.max.apply(null, n);
		var min_number = Math.min.apply(null, n);

		if (flag === 0) {
				// Use for debugging
				// console.log("In max if statement."); 
				// console.log("The max number is: " + max_number);
	   		// Add max number to new array
	   		new_array.push(max_number);
	   		// Find the index location in original array
	   		var index_location = n.indexOf(max_number); 
	   		// Remove the value in that location from array  
			n.splice(index_location, 1);
				// Use for debugging
				// console.log("The new array is: " + new_array);
			// Reset flag so that next number found is min
			flag = 1;
				// Use for debugging
				// console.log("Flag is set to: " + flag);
		} else  if (flag === 1) {
				// Use for debugging
				// console.log("In min if statement.");
    			// console.log("The min number is: " + min_number);
    		// Add min number to new array
    		new_array.push(min_number);
    		// Find index location in original array
			var index_location = n.indexOf(min_number);
			// Remove the value in that location from array
			n.splice(index_location, 1);
				// Use for debugging
				// console.log(n);
				// console.log("The new array is: " + new_array);
    		flag = 0;
    			// Use for debugging
    			// console.log("Flag is set to: " + flag);
		} // End of if else if

	} // End of for

	console.log(new_array);

} // End of wiggleArrangeArray

wiggleArrangeArray(n);