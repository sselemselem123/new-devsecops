const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
