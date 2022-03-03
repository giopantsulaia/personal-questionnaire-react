import React from "react";
import "./Submit.css";
import { Link } from "react-router-dom";
export default function Submit() {
  return (
    <div>
      <main className="submitPage">
        <div className="submit-cont">
          <button className="start-btn">Submit</button>
          <Link to="/insights" className="submitted-apps">
            Go back
          </Link>
        </div>
      </main>
    </div>
  );
}
