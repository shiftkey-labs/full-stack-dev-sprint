import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();
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
        {currentUser ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
