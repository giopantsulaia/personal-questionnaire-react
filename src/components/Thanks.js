import React from "react";
import "./Thanks.css";
import { useNavigate } from "react-router-dom";
function Thanks() {
  let navigate = useNavigate();
  function onHover() {
    navigate("/");
  }
  setTimeout(() => onHover(), 3000);
  return (
    <div className="main">
      <h1 className="thanks">Thanks for Joining 😊</h1>
    </div>
  );
}

export default Thanks;
