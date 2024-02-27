import React from "react";
import "./styles/register.css";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProfile() {

  let navigate = useNavigate();
  const location = useLocation();
  const { userID } = location.state;
  const id=parseInt(userID);
  const initialRegisterState = {
    roleID: 2,
    username: "",
    password: "",
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
      firstName: registerData.firstName,
      lastName: registerData.lastName
    };
    setRegisterData(data);
    clearState();

  axios
  .put(`http://localhost:3001/api/user/edit/${id}`, data)
  .then((res) => {
    console.log(res.data);
    setRegisterData(res.data);
  })
  .catch(error => {
    console.error(error)
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
          <h3 className="title">Edit your account</h3>

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
              Submit changes
            </button>
          </form>
        </div>
      ) : (
        <h4 className="successful-register">Successful edit...</h4>
      )}
    </div>
  );
}

export default EditProfile;