import React from "react";
import { Link } from "react-router-dom";
import banner from "./assets/home.png";
import "./styles/home.css";

function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <h2 className="moto-container">
        Regular physical activity is one of the most important things you can do for your health.
        Being physically active can improve your brain health, help manage weight,
        reduce the risk of disease, strengthen bones and muscles, 
        and improve your ability to do everyday activities. You can start today. Join now!
        </h2>
        <img className="home-picture" src={banner} />
      </div>
    </div>
  );
}

export default Home;