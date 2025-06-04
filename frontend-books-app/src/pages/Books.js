import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Books.css";
import alertify from "alertifyjs";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3033/books");
        setBooks(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    alertify.confirm(
      "Kitabı silmek istediğinize emin misiniz?",
      async function (e) {
        if (e) {
          try {
            await axios.delete(`http://localhost:3033/books/${id}`);
            setBooks(books.filter((book) => book._id !== id));
            alertify.success("Kitap başarıyla silindi!");
          } catch (err) {
            alertify.error("Silme işlemi sırasında bir hata oluştu!");
          }
        }
      }
    );
  };

  return (
    <div>
      <div className="books-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book" key={book._id}>
              <img className="cover-image" src={book.cover} alt="" />

              <h3 className="book-title">
                <a href={`/books/${book._id}`}>{book.title}</a>
              </h3>
              <p className="book-description">{book.desc}</p>
              <h3 className="book-price">{book.price}TL</h3>
              <div className="del-update-buttons">
                <Link
                  className="delete-button"
                  onClick={() => handleDelete(book._id)}>
                  Sil
                </Link>
                <Link className="update-link" to={`/updateBook/${book._id}`}>
                  Güncelle
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="not-found">Kitap bulunamadı.</div>
        )}
      </div>
    </div>
  );
};

export default Books;
