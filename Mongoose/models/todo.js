const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  hidden: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);