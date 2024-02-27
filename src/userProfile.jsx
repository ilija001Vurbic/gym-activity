import React from "react";
import { Link } from "react-router-dom";
import "./styles/userProfile.css";
import profileImage from "./assets/profileImage.jpg"

function InvestorProfile() {
  const username = localStorage.getItem("username");
  const roleID = localStorage.getItem("roleID");

  const userID = localStorage.getItem("userID");
  return (
    <div className="user-container">
      <div className="user">
        <img src={profileImage} className="user-profile-image" />
        <div className="user-data">
          <h1 className="greeting-message">Hello, {username}.</h1>
          <Link
                  className="link"
                  to={`/user/edit/${userID}`}
                  state={{ userID: userID }}
            >
              <button className="user-edit-button">Edit profile!</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default InvestorProfile;
