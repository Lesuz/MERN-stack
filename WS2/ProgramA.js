var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');
console.log(data.toString());

for (let i=0; i< 15; i++){
    console.log("Node just keeps on going while the file is being read...");
}

console.log("Program Ended");