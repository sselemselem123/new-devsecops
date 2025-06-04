const Book = require("../models/Book.js");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ success: true, data: books });
  } catch (err) {
    res.status(500).json({ success: false, error: "Kitaplar alınamadı." });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json({ success: true, data: book });
    } else {
      res.status(404).json({ success: false, error: "Kitap bulunamadı." });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: "Kitap alınamadı." });
  }
};

exports.createBook = async (req, res) => {
  const { title, desc, cover, price } = req.body;

  try {
    if (
      price === undefined &&
      title === undefined &&
      decs === undefined &&
      cover === undefined
    ) {
      throw new Error("Bilgiler gereklidir.");
    }

    if (price <= 0) {
      throw new Error("Fiyat sıfırın altında olamaz.");
    }

    const newBook = await Book.create({
      title,
      desc,
      cover,
      price,
    });
    res.status(201).json({ success: true, data: newBook });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  const { title, desc, cover, price } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, desc, cover, price },
      { new: true }
    );
    if (updatedBook) {
      res.status(200).json({ success: true, data: updatedBook });
    } else {
      res.status(404).json({ success: false, error: "Kitap bulunamadı." });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: "Kitap güncellenemedi." });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ _id: req.params.id });
    if (deletedBook) {
      res
        .status(200)
        .json({ success: true, message: "Kitap başarıyla silindi." });
    } else {
      res.status(404).json({ success: false, error: "Kitap bulunamadı." });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: "Kitap silinemedi." });
  }
};
