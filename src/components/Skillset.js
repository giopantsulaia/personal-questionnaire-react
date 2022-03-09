import React, { useState, useEffect } from "react";
import "./Skillset.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import removeIcon from "../images/Remove.svg";
export default function Skillset({
  input,
  setInput,
  chosen,
  setChosen,
  userInfo,
  setUserInfo,
  skills,
  setSkills,
}) {
  function handleChange(e) {
    setInput(e.target.value);
  }
  const [skillCount, setSkillCount] = useState(0);
  let randomNum;
  function handleSubmit(e) {
    e.preventDefault();
    if (chosen.find((e) => e.skili === input) == null) {
      setChosen([
        ...chosen,
        {
          id: skills.find((o) => o.title === input).id,
          skili: input,
          years: skillExp.value,
        },
      ]);
    }
    randomNum = Math.floor(Math.random() * 10000);
    setSkillCount((prevSkillCount) => prevSkillCount + 1);
  }
  function updateState() {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        skills: chosen.map((item) => {
          return {
            id: item.id,
            experience: item.years,
          };
        }),
      };
    });
  }
  function handleExpValueChange(event) {
    const { name, value } = event.target;
    setSkillexp((prevSkillexp) => {
      return {
        ...prevSkillexp,
        [name]: value,
      };
    });
  }

  const [skillExp, setSkillexp] = useState("");
  const handleRemove = (id) => {
    const newSkills = chosen.filter((item) => item.id !== id);
    setChosen(newSkills);
    setSkillCount((prevSkillCount) => prevSkillCount - 1);
  };
  const linkStyle = {
    margin: "0px",
    padding: "0px",
    textDecoration: "none",
  };
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(userInfo));
  }, [userInfo]);
  function handleClick() {
    if (skillCount != 0) {
      updateState();
    } else {
      window.location.reload(false);
      alert("YOU HAVE TO CHOOSE AT LEAST 1 SKILL IN ORDER TO CONTINUE");
    }
  }
  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="technical-title">Tell us about your skills</h1>
        <form className="skill-inputs" onSubmit={handleSubmit}>
          <select
            className="skill-select"
            name="chosen"
            onChange={handleChange}
            defaultValue={"Skills"}
          >
            <option disabled hidden value={"Skills"}>
              Skills
            </option>
            {skills.map((skill) => {
              return (
                <option key={skill.id} className="skills">
                  {skill.title}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            placeholder="Experience Duration in Years"
            name="value"
            value={skillExp.value || ""}
            className="years-exp"
            onInvalid={() => {
              alert("YOU CAN ONLY CHOOSE NUMBERS BETWEEN 0 AND 20");
            }}
            min={1}
            required
            onChange={handleExpValueChange}
            max={20}
          />
          <button className="add-skill">Add Programming Language</button>
        </form>
        <div className="selected-skills">
          {chosen.map((item) => {
            return (
              <div
                className="skill-cont"
                key={Math.floor(Math.random() * 10000)}
              >
                <h2 className="skill" key={randomNum}>
                  {item.skili}
                </h2>
                <h2
                  className="exp"
                  key={randomNum}
                >{`Years of Experience: ${item.years}`}</h2>
                <img
                  src={removeIcon}
                  onClick={() => handleRemove(item.id)}
                  className="delete-btn"
                  key={randomNum}
                />
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Link to="/personal-info" style={linkStyle}>
            <img src={previous} className="previous"></img>
          </Link>
          <Link to="/personal-info" style={linkStyle}>
            <i className="fas fa-circle"></i>
          </Link>
          <Link to="/technical-skillset" style={linkStyle}>
            <i className="fas fa-circle"></i>
          </Link>
          <Link to="/covid" style={linkStyle} onClick={handleClick}>
            <i className="fas fa-circle dark"></i>
          </Link>
          <i className="fas fa-circle dark"></i>
          <i className="fas fa-circle dark"></i>
          <Link to="/covid" style={linkStyle} onClick={handleClick}>
            <img src={next} className="next"></img>
          </Link>
        </div>
      </div>
      <div className="right-cont">
        <h1 className="technical-title">A bit about our battles</h1>
        <p className="description">
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </main>
  );
}
