import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Course Tasks</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/add-task"> Add A Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
