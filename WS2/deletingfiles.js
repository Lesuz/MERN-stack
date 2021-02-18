var fs = require("fs");

console.log("Program started");

// print out all the files present in the directory
getFilesInDirectory();

// deleting file and a callback
fs.unlink("combinedText.txt", (err => {
    if(err) console.log(err);
    else {
        console.log("\n Deleted file: combinedText.txt");
        // calling function to see if file was deleted
        getFilesInDirectory();
    }
}));

// function which lista all files in directory
function getFilesInDirectory() {
    console.log("\n Files present in directory");
    let files = fs.readdirSync(__dirname);
    files.forEach(file => {
        console.log(file);
    });
}

console.log("Program ended");