import React from "react";
import "./styles/register.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  
    const initialRegisterState = {
      RoleID: 2,
      Username: "",
      Password: "",
      Email: "",
      FirstName: "",
      LastName: "",
    };
  
    const [registerData, setRegisterData] = useState(initialRegisterState);
    const [isRegistered, setIsRegistered] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      setIsAdmin(registerData.RoleID == 1 || registerData.RoleID == 2);
    }, [registerData]);
  
    return (
      <div className="register-container">
        {isRegistered ? (
          <div className="register-box">
            <h3 className="title">Register your account.</h3>
  
            <div className="select-form">
              <label for="register">Register as:</label>
              <select
                id="register"
                name="RoleID"
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
                name="Username"
                id="username"
                placeholder="Username"
              />
              <input
                type="password"
                name="Password"
                id="password"
                placeholder="Password"
              />
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
              />
              {isAdmin ? (
                <div></div>
              ) : (
                <div className="register-form">
                  <input
                    type="text"
                    name="FirstName"
                    id="first-name"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name="LastName"
                    id="last-name"
                    placeholder="Last name"
                    />
                </div>
              )}
              <button
                type="button"
                className="submit-button"
                value="submit"
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