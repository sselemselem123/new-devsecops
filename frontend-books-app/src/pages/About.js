import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>Hakkında</h2>
      <p>
        Bu uygulama, kitap yönetimi için kullanılan bir React uygulamasını
        temsil eder. Kitapları listelemek, yeni kitap eklemek, mevcut kitapları
        güncellemek ve silmek için kullanabilirsiniz.
      </p>
      <p>
        Uygulamanın kaynak kodlarına erişmek için GitHub deposunu ziyaret
        edebilirsiniz:{" "}
        <a href="https://github.com/your-github-repo">GitHub Repository</a>
      </p>
      <p>
        Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz:{" "}
        <a href="mailto:tanerozer16@gmail.com">tanerozer16@gmail.com</a>
      </p>
    </div>
  );
}

export default About;
