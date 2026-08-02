const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public")); //in-built Middleware

app.get('/', (req, res) => {
  res.send('Hello World...');
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