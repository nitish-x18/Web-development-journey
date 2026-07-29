const path = require("path")

// console.log(path)

let mypath = "c:\\sigma web development\\Working with Files\\aboutpath.js";
console.log(path.extname(mypath));
console.log(__dirname);
console.log(__filename);
console.log(path.basename(mypath));
console.log(path.join("c:\\", "sigma web development\\text.txt"));