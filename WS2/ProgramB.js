var fs = require("fs");

console.log("Program started");


fs.readFile('example.txt', results);

for (let i=0; i < 15; i++) {
    console.log("Node just keeps on going while the file is being read...");
}

function results(err, data){
    if (err) console.log(err);
    console.log("Results of fileread: ");
    console.log(data.toString());
}
