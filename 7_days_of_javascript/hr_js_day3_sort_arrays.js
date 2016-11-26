console.log("JavaScript is connected.");

function sortLibrary(object) {
    // var library is defined, use it in your code
    // Loop through library and pull out book titles
    var bookList = "";
    for(i in object) {
    	// console.log("i now equals:" + i);
    	bookList += object[i].title + "\n";
     }
  	object.sort(function(){
  		return bookList;
  	});
   	console.log(bookList);
 }

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary(library);