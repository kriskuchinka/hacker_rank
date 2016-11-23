console.log("JavaScript is Linked");
/*
 * Complete the function below.
 */
// FAILURE: Could not complete test in time. Please look below
//--> I tried to explain the logic I was trying to use

// Hard code set of array numbers
// --> Having difficulty with STDIN
var n = [25, 27, 6, 5, 8, 9];

// use built in function name to perform desired task
function wiggleArrangeArray(intArr) {
	// Initialize min/max variables and find those values
    // var max_number = Math.max.apply(null, n);
    // var min_number = Math.min.apply(null, n);
    // Check that Math works
    // console.log(max_number);
    // console.log(min_number);
    // console.log("2 numbers appeared? Min and Max are working.");

    // Find length of original array
    var original_length = n.length;
    console.log("The length of the array is: " + original_length);
	// Initiate flag variable to show max(0) or min(1)
	// var flag = 0;
    // Create a new array to put numbers into
    new_array = [];
 
    // Loop through n array
    //---> Ran out of time to complete 
	flag = 0;

    
    for (i = 0; i = n.length; i++) {
   		console.log("Inside loop.");
   		console.log(n);
		var max_number = Math.max.apply(null, n);
		var min_number = Math.min.apply(null, n);
   		// var current_num = n[i];
   		// console.log(current_num);
		// n.pop(max_number);

   		// if (i === max_number && flag === 0) {
		// 	flag = 0;
		// } else if (i === min_number && flag === 1) {
		// 	flag = 1;
		// } // end of if

		if (flag === 0) {
			console.log("In max if statement."); 
	   		console.log("The max number is: " + max_number);
	   		new_array.push(max_number);
	   		var index_location = n.indexOf(max_number);   
			n.splice(index_location, 1);
			console.log("The new array is: " + new_array);
			flag = 1;
			console.log("Flag is set to: " + flag);
		} else  if (flag === 1) {
			console.log("In min if statement.");
    		console.log("The min number is: " + min_number);
    		new_array.push(min_number);
			var index_location = n.indexOf(min_number);
			n.splice(index_location, 1);
    		console.log(n);
    		console.log("The new array is: " + new_array);
    		flag = 0;
    		console.log("Flag is set to: " + flag);
		}
		 //    var max_number = i.Number.MAX_VALUE
		// switch (flag === 0) {
		// 	case n:
		// 		console.log(max_number);
		// 		n.pop(max_number);
		// 		console.log(n.length);
		// 		new_array.push(max_number);
		// 		console.log(new_array.length);
		// 		console.log(new_array);
		// 		flag = 1;
		// 		break;
		// 	case case n.Number.NEGATIVE_INFINITY:
		// 		console.log(min_number);
		// 		n.pop(min_number);
		// 		console.log(n.length);
		// 		new_array.push(min_number);
		// 		console.log(new_array.length);
		// 		console.log(new_array);
		// 		flag = 0;
		// 		break;
		// } // End of switch
	} // End of for
} // End of wiggleArrangeArray

wiggleArrangeArray(n);