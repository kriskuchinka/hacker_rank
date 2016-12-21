document.write("JavaScript is connected.");
document.write("<br>This has been successfully completed.");

var myArray = [3, 4, 5, 6, 7, 7];
console.log(myArray);
console.log("Goal is to output the number 6 and avoid repeated largest number.");

function processData(myArray) {
    // console.log("The original array is: " + myArray);
    var largestNumber = Math.max.apply(null, myArray);
    // console.log("The largest number is " + largestNumber);
    var location = myArray.indexOf(largestNumber);
    // console.log("The index location is: " + location);
    myArray.splice(location, 1);
    // console.log("The new array is: " + myArray);
    
    for (i = 0; i < myArray.length; i++) {
        if(largestNumber === myArray[i]) {
            myArray.splice(location, 1);
            // console.log("The new array is: " + myArray);
        }
    }
    
    var newLargestNumber = Math.max.apply(null, myArray);
    console.log(newLargestNumber);
}

processData(myArray);