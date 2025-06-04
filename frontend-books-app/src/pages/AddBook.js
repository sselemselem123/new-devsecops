import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "./AddBook.css";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (book.price <= 0) {
      alertify.error("Fiyat alanı 0 veya (-) değerler olamaz!");
      return;
    }

    if (!book.title || !book.desc || !book.price || !book.cover) {
      alertify.error("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      await axios.post("http://localhost:3033/books", book);
      alertify.success("Kitap başarıyla eklendi.");
      navigate("/books");
    } catch (err) {
      alertify.error("Ekleme sırasında bir hata oluştu.");
    }
  };

  return (
    <div>
      <div className="form">
        <h1>Yeni Kitap Ekle</h1>
        <input
          type="text"
          placeholder="Kitap Başlığı"
          onChange={handleChange}
          name="title"
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Kitap Açıklaması"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Kitap Fiyatı"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="Kitap Resmi"
          onChange={handleChange}
          name="cover"
        />
        <button className="extend-btn-width" onClick={handleClick}>
          Yeni Kitap Ekle
        </button>

        <Link to="/books">Tüm Kitapları Görüntüle</Link>
      </div>
    </div>
  );
};

export default Add;
