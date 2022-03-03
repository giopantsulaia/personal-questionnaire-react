import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import rocketman from "../images/rocketman.png";
export default function Main() {
  return (
    <main className="mainPage">
      <h1 className="welcome-title">Welcome Rocketeer !</h1>
      <div className="main-cont">
        <Link to="/personal-info" className="start-btn">
          Start Questionnaire
        </Link>
        <p className="submitted-apps">Submitted Applicnations</p>
        <img src={rocketman} className="rocketman" alt="rocketman"></img>
      </div>
    </main>
  );
}
