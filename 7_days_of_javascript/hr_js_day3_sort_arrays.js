console.log("JavaScript is connected.");

function sortLibrary(object) {
	var libraryList = library.sort(function(a ,b) {
		return a.title > b.title;
	});
	console.log(libraryList);

} // end of FUNCTION sortLibrary

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
