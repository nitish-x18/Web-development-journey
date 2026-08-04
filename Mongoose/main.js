const express = require('express');
const mongoose = require('mongoose');
const Todo = require("./models/todo");
const app = express();
const port = 3000;

let conn = mongoose.connect("mongodb://localhost:27017/Todo");

app.get('/', async(req, res) => {
    const todo = await new Todo({title: "Hello", author: "nitish", hidden: true});
    todo.save();
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});