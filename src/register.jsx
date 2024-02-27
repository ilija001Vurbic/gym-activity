import React from "react";
import "./styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Register() {

  let navigate = useNavigate();

  const initialRegisterState = {
    roleID: 2,
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };

  const [registerData, setRegisterData] = useState(initialRegisterState);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(registerData.RoleID == 1 || registerData.RoleID == 2);
  }, [registerData]);

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const saveRegisterData = () => {
    var data = {
      roleID: registerData.roleID,
      username: registerData.username,
      password: registerData.password,
      email: registerData.email,
      firstName: registerData.firstName,
      lastName: registerData.lastName
    };
    setRegisterData(data);
    clearState();

    axios
      .post("http://localhost:3001/api/register/", data)
      .then((res) => {
        console.log(res.data);
        setRegisterData(res.data);
        setIsRegistered(false);
      });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const clearState = () => {
    setRegisterData(initialRegisterState);
  };

  return (
    <div className="register-container">
      {isRegistered ? (
        <div className="register-box">
          <h3 className="title">Register your account.</h3>

          <div className="select-form">
            <label for="register">Register as:</label>
            <select
              id="register"
              name="roleID"
              value={registerData.RoleID}
              onChange={handleRegisterChange}
            >
              <option value="1">Admin</option>
              <option value="2" selected>
                User
              </option>
            </select>
          </div>

          <form className="register-form" autoComplete="off" method="POST">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={registerData.username}
              onChange={handleRegisterChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="firstName"
              id="first-name"
              placeholder="First name"
              value={registerData.firstName}
              onChange={handleRegisterChange}
            />
            <input
              type="text"
              name="lastName"
              id="last-name"
              placeholder="Last name"
              value={registerData.lastName}
              onChange={handleRegisterChange}
            />
            <button
              type="button"
              className="submit-button"
              value="submit"
              onClick={saveRegisterData}
            >
              Register
            </button>
          </form>
          <Link className="login-link" to="/login">
            <p>Already have an account?</p>
          </Link>
        </div>
      ) : (
        <h4 className="successful-register">Loading...</h4>
      )}
    </div>
  );
}

export default Register;