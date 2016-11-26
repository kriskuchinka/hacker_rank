console.log("JavaScript is connected.");
// Part of this code is from the Hacker Rank IDE. My job is to fill // it in to make it work
// var objectsList = "";


function displayInformation(opt) {
	var bookList;
	var i;

	for (i in opt) {
		bookList += opt[i] + "\n";
		// console.log(opt[i]);
		var title = opt[i].title;
		var author = opt[i].author;
		var status = opt[i].readingStatus;
		// console.log(title);
		// console.log(author);
		// console.log(status);
		switch (status) {
			case true:
				console.log("Already read '" + title + "' by " + author +".");
				break;
			case false:
				console.log("You still need to read '" + title + "' by " + author + ".");
				break;
		} // end of switch 
	} // end of for
	// console.log(opt[0]);
} // end of displayInformation


// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];


displayInformation(library);