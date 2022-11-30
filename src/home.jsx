import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <h2 className="moto-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cupiditate perferendis eius at optio deserunt facere ut odit harum
          deleniti aperiam dolore, iure dignissimos suscipit autem velit
          explicabo sed assumenda?
        </h2>
      </div>
      <div className="newUser-container">
      <Link className="register-link" to="/register">
            <p>Don't have an account?</p>
       </Link>
     </div>
    </div>
  );
}

export default Home;