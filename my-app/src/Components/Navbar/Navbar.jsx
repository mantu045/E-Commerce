import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="logo-text">SHOPNEST</h2>
        </div>

        <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>

        <ul className="nav-links desktop-only">
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
        </ul>

        <div className="right-section desktop-only">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <div className="cart-wrapper">
            <img src={cart_icon} alt="Cart" />
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
          <li>
            <div className="cart-wrapper">
              <img src={cart_icon} alt="Cart" />
              <div className="nav-cart-count">0</div>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
