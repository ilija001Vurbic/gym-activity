import React from "react";
import { Link } from "react-router-dom";
import "./styles/userProfile.css";

function InvestorProfile() {

  return (
    <div className="user-container">
      <div className="user">
        <img  className="user-profile-image" />
        <div className="user-data">
          <h1 className="greeting-message">Hello, User.</h1>
          <Link
                  className="link"
                  to={`/edit/id`}
            >
              <button className="user-edit-button">Edit profile!</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default InvestorProfile;
