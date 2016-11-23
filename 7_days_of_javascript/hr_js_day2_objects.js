console.log("JavaScript is connected");

/*
The following JavaScript was included in HR IDE, but heavily 
adapted by me to make the object actually print in the browser  console. As seen below, I commented out the unnecessary code to 
achieve that process.
*/

function printObjectProperty(myObject) {
  //Write your code here
  // console.log(myObject.type);
  // console.log(myObject.model);
  // console.log(myObject.color);
  console.log(myObject);
}

// The below code is to show how to create an Object. 
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

function createObject() {
    var myObject = {type:"Audi", model:"A4", color:"Black"};
    printObjectProperty(myObject);
}

createObject();