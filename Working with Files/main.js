const fs = require("fs");
const fspromises = require("fs/promises")

console.log('starting');
// fs.writeFilesync("text1.txt", "Hello world from text 1");

// fs.writeFile("text.txt", "Hello World", () => {
//     console.log('Done');
// });

// fs.readFile("text.txt", (error, data) => {
//     console.log(error, data.toString());
// });

//call back hell-->
fs.writeFile("text.txt", "Hello World", () => {
    console.log('Done');
    fs.readFile("text.txt", (error, data) => {
        console.log(error, data.toString());
    });
});

fs.appendFile("text.txt", " append kiya huwa text", (e,d) => {
    console.log(d);
});

console.log('ending')