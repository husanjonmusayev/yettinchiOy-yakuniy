import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="content-header ">
      <div className="header-wrapper content-wrapper">
        <div className="logo">
          <div className="sied-bar">
            <label class="burger" for="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <NavLink to="/">
            <img src="/public/logo.svg" alt="logo" />
          </NavLink>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/headphones">HEADPHONES</NavLink>
            </li>
            <li>
              <NavLink to="/spekars">SPEAKERS</NavLink>
            </li>
            <li>
              <NavLink to="/earphones">EARPHONES</NavLink>
            </li>
          </ul>
        </div>
        <div className="shopping">
          <NavLink to="/shopping">
            <img src="/public/basket.svg" alt="shop" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
