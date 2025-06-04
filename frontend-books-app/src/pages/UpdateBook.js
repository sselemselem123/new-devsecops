import alertify from "alertifyjs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3033/books/${bookId}`
        );
        const bookData = response.data;
        setBook(bookData.data);
      } catch (error) {
        console.error("Veriler alınamadı", error);
      }
    };

    getBookDetails();
  }, [bookId]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (book.price <= 0) {
      alertify.error("Fiyat alanı  0 veya (-) değerler olamaz!");
      return;
    }
    if (!book.title || !book.desc || !book.price || !book.cover) {
      alertify.error("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3033/books/${bookId}`,
        book
      );

      if (response.status === 200) {
        navigate("/books");
        alertify.success("Kitap başarıyla güncellendi.");
      } else {
        alertify.error("Güncelleme sırasında bir hata oluştu.");
      }
    } catch (error) {
      alertify.error("Güncelleme sırasında bir hata oluştu.");
    }
  };

  return (
    <div>
      <div className="form">
        <h1> Kitabı Güncelle</h1>
        <input
          type="text"
          placeholder="Kitap Başlığı"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <textarea
          rows={5}
          placeholder="Kitap Açıklaması"
          name="desc"
          onChange={handleChange}
          value={book.desc}
        />
        <input
          type="number"
          placeholder="Kitap Fiyatı"
          onChange={handleChange}
          name="price"
          value={book.price}
        />
        <input
          type="text"
          placeholder="Kitap Image"
          onChange={handleChange}
          name="cover"
          value={book.cover}
        />
        <button className="extend-btn-width" onClick={handleClick}>
          Kitabı Güncelle
        </button>
        <Link to="/books">Tüm Kitapları Görüntüle</Link>
      </div>
    </div>
  );
};

export default Update;
