/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.css";
import homeImage from "./images.jpeg";

function Home() {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Welcome Image" className="home-image" />
      <h2>Kitap Uygulamamıza Hoş Geldiniz</h2>
      <p>
        Burası farklı türlerden harika kitapları keşfedebileceğiniz ve
        keşfedebileceğiniz bir yer.
      </p>
      <p>
        Kitap koleksiyonumuza göz atarak başlayın ve en sevdiğiniz kitapları da
        eklemeyi unutmayın!
      </p>
    </div>
  );
}

export default Home;
