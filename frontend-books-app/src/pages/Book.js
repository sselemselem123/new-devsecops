import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Book.css";

function Book({ books }) {
  const [book, setBook] = useState(null);
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  console.log("bookId", bookId);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          `http://localhost:3033/books/${bookId}`
        );
        const bookData = response.data;
        setBook(bookData.data);
      } catch (error) {
        console.error("Kitap bilgilerini alırken bir hata oluştu:", error);
      }
    }

    fetchBook();
  }, [bookId]);

  return (
    <div className="book-container">
      {book ? (
        <div>
          <img
            src={book.cover}
            alt={`${book.title} Kapağı`}
            className="book-cover"
          />
          <h2 className="book-title">{book.title}</h2>
          <p className="book-description">{book.desc}</p>
          <p className="book-price">Fiyat: {book.price} TL</p>
        </div>
      ) : (
        <p className="loading-message">Kitap bilgileri yükleniyor...</p>
      )}
    </div>
  );
}

export default Book;
