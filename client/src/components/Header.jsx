import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My University Tasks</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/add-task">New Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
