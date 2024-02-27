import React from "react";
import "./styles/gymInfo.css"
import gymImg from "./assets/gym.png"


function GymInfo() {

  return (
    <div className="gym-container">
      <div className="gym">
        <img src={gymImg} className="gym-image" />
        <div className="gym-data">
          <h2>Gym</h2>
          <h3>Address: Zmaja Jove Jovanovića 12</h3>
          <h3>Working hours: Monday to Friday 6-23</h3>
          <h3>Contact: +38531555555</h3>
        </div>
      </div>
    </div>
  );
}

export default GymInfo;
