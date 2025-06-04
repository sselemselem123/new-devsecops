import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Kitap Uygulaması</p>
      <div className="social-icons">
        <a
          href="https://github.com/dxtaner"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://medium.com/@dxtaner"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/tanerozer16/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
