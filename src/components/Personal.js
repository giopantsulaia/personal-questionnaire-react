import React from "react";
import "./Personal.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Personal() {
  // MAKING IT SO THAT DATA DOES NOT GET LOST AFTER REFRESHING/LEAVING THE PAGE
  function getFormInfo() {
    const storedInfo = localStorage.getItem("form");
    if (!storedInfo)
      return {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
      };
    return JSON.parse(storedInfo);
  }
  //------------------------------------------------------------------

  const [userInfo, setUserInfo] = useState(getFormInfo);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(userInfo));
  }, [userInfo]);
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }
  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="personal-title">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <form className="personal-inputs">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="E Mail"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="+995 5_ _ _ _"
            name="phoneNum"
            value={userInfo.phoneNum}
            onChange={handleChange}
          />
        </form>
        <Link to={`/technical-skillset`}>
          <button>NEXT PAGE</button>
        </Link>
      </div>
      <div className="right-cont">
        <h1 className="personal-title">Redberry Origins</h1>
        <p className="description">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That's where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </main>
  );
}
