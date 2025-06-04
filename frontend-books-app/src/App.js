import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook.js";
import Books from "./pages/Books.js";
import BooksIDs from "./pages/Book.js";
import UpdateBook from "./pages/UpdateBook.js";
import About from "./pages/About.js";
import Footer from "./pages/Footer.js";
import Nav from "./pages/Nav.js";
import NotFound from "./NotFound.js";
import Home from "./Home.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BooksIDs />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/updateBook/:id" element={<UpdateBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
