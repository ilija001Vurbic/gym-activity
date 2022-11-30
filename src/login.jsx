import React from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="title">Login into your account.</h3>

        <label for="login">Login as:</label>
        <select
          id="login"
          name="RoleId"
        >
          <option value="1">Admin</option>
          <option value="2" selected>
            User
          </option>
        </select>

        <form className="login-form" autoComplete="off">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            id="username"
            required
          />
          <input
            type="password"
            name="Password"
            id="password"
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="submit-button"
            value="submit"
          >
            Login
          </button>
        </form>
        <Link className="register-link" to="/register">
          <p>Don't have an account?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
