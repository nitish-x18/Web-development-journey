const express = require('express');
const fs = require('fs');
const app = express();
const birds = require("./routes/birds");
const port = 3000;

app.use(express.static("public")); //in-built Middleware

app.use('/birds', birds);

//application level middleware-1
app.use((req, res, next) => {
    console.log('Middleware 1')
    req.spidy = "i am Spiderman"
    fs.appendFileSync("login.txt", `${new Date(Date.now())} and method is used: ${req.method} Method\n`);
    console.log(`${new Date(Date.now())} and method is used: ${req.method} Method`);
    next();
});

//application middleware-2
app.use((req,res,next) => {
    console.log('Middleware 2')
    next();
})

app.get('/', (req, res) => {
    res.send('Hello world... ' + req.spidy);
});

app.get('/about', (req, res) => {
    res.send('Hello World... from the about page');
});

app.get('/contact', (req, res) => {
    res.send('Hello World... from the cotact page');
});

app.get('/home', (req, res) => {
    res.send('Hello World... from the home page');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});