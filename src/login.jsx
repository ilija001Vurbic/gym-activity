import React from "react";
import "./styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import service from "./service";
function Login() {
  let navigate = useNavigate();

  const initalLoginState = {
    username: "",
    password: ""
  };

  const [loginData, setLoginData] = useState(initalLoginState);
  const [isLoggedIn, setIsLogedIn] = useState(true);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const saveLoginData = () => {
    var data = {
      username: loginData.username,
      password: loginData.password
    };
    setLoginData(data);

    axios
      .get("http://localhost:3001/api/login", data)
      .then((res) => {
        setLoginData(JSON.stringify(res.data));
        setIsLogedIn(true);
        localStorage.setItem("username", loginData.username);
        localStorage.setItem("IsLoggedIn", isLoggedIn);
        service.getUserByUsername(data.username)
        .then((res) => {
          localStorage.setItem("userID", res.data);
          localStorage.setItem("roleID",res.data);
        });
        console.log(res.data);
        clearState();
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      })
  };

  const clearState = () => {
    setLoginData(initalLoginState);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="title">Login into your account.</h3>

        <label for="login">Login as:</label>
        <select
          id="login"
          name="roleID"
          value={loginData.roleID}
          onChange={handleLoginChange}
        >
          <option value="1">Admin</option>
          <option value="2" selected>
            User
          </option>
        </select>

        <form className="login-form" autoComplete="off" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button
            type="button"
            className="submit-button"
            value="submit"
            onClick={saveLoginData}
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
