import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Delicious Meals</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
