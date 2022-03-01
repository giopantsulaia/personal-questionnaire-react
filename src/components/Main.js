import React from "react";
import "./Main.css";
import rocketman from "../images/rocketman.png";
export default function Main() {
  return (
    <main className="mainPage">
      <h1 className="welcome-title">Welcome Rocketeer !</h1>
      <div className="main-cont">
        <button className="start-btn">Start Questionnaire</button>
        <p className="submitted-apps">Submitted Applications</p>
        <img src={rocketman} className="rocketman"></img>
      </div>
    </main>
  );
}
