import React from "react";
import "./styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useLocation } from "react";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("IsLoggedIn");
  const roleID = localStorage.getItem("roleID");
  const [roleId, setRoleId] = useState(2);

  useEffect(() => {
    setRoleId(roleID);
  });

  const clearLocalStorage = () => {
    localStorage.clear();
    isLoggedIn=null;
    navigate("/login")
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <h3 className="logo">GYM</h3>
      <div className="nav-container">
        <ul className="nav">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/activities">
            <li>Activities</li>
          </Link>
          <Link className="link" to="/about">
            <li>About gym</li>
          </Link>
          <li>|</li>
          {isLoggedIn==null ? (
            <Link className="link" to="/login">
              <li>Login</li>
            </Link>
          ) : (
            <div className="nav">
              <Link className="link" onClick={clearLocalStorage}>
                <li>Logout</li>
              </Link>
                <div className="nav-approve">
                  <Link className="link profile" to="/profile">
                    <li>Profile</li>
                  </Link>
                </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;