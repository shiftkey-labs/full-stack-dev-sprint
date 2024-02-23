import React, { useState } from "react";

import "../styles/Form.css";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, register } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(email, password);
    } else {
      await register(name, email, password);
    }

    navigate("/");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <div className="form-group">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Login" : "Signup"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleForm}
          style={{ marginTop: "10px" }}
        >
          {isLogin ? "Need to create an account?" : "Already have an account?"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
