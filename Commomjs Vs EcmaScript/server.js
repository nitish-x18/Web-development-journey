// const http = require('node:http'); // "type": "commonjs"
// import http from 'http' // "type": "module",

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello World!!!\n');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, c} from "./module.js";
// console.log(a,b,c);

// import obj from "./module.js"; // we can also call from any name 
// console.log(obj);

// import nitish from "./module.js"; //import obj from nitish name
// console.log(nitish)

const a = require("./module-2.js");
console.log(a, __dirname, __filename);
