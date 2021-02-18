var fs = require("fs");

console.log("Program started");

let combineText = "I wrote this" + "\n" ;

// readfileSync return the contents of the read file, toSting() changes it to a readable string
combineText += fs.readFileSync("example.txt",read).toString() + "\n";

// adding another file's string right after the previous one to combine the texts from 2 separate files
combineText += fs.readFileSync("anotherfile.txt", read).toString() + "\n";

combineText += "I wrote this!";

// making a new file out the the combined texts
fs.writeFileSync("combinedText.txt", combineText)
console.log(combineText)

console.log("Program Ended");

// functions to deal with fileread results
function read(err, data) {
    // return error if error happens when file is read
    if (err) return console.error(err);
    // return data as a string if no error happens
    return data.toString();
}