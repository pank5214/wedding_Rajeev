import React from "react";
import wp from "../images/w.png";

const Contact = () => {
  return (
    <footer>
      <div className="container center-text">
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/share/1EMqJ4hT7j/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon icon-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rajeevgupta4554?igsh=MXIzYjdzZjc2aWN6Mw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon icon-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/919826641491"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="WP" src={wp} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
