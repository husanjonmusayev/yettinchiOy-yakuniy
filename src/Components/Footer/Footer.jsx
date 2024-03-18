import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="left-content">
          <div className="logo">
            <img src="/public/logo.svg" alt="logo iconn" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/spekars">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-content">
          <div className="col1">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <h3>Copyright 2021. All Rights Reserved</h3>
          </div>
          <div className="col">
            <img src="/public/i.svg" alt="" />
            <img src="/public/f.svg" alt="" />
            <img src="/public/t.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
