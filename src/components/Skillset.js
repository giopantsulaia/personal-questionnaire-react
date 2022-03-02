import React, { useState, useEffect } from "react";
import "./Skillset.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import removeIcon from "../images/Remove.svg";
export default function Skillset({ input, setInput, chosen, setChosen }) {
  //SKILLS FETCHED FROM API
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
    console.log("changed");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (chosen.find((e) => e.skili === input) == null) {
      setChosen([
        ...chosen,
        { id: uuidv4(), skili: input, years: skillExp.value },
      ]);
      console.log(input);
    }
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
  };
  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="technical-title">Tell us about your skills</h1>
        <form className="skill-inputs" onSubmit={onSubmit}>
          <select
            className="skill-select"
            name="chosen"
            onChange={handleChange}
          >
            <option disabled hidden>
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
            value={skillExp.value}
            className="years-exp"
            onChange={handleExpValueChange}
          />
          <button className="add-skill">Add Programming Language</button>
        </form>
        <div className="selected-skills">
          {chosen.map((item) => {
            return (
              <div className="skill-cont">
                <h2>{item.skili}</h2>
                <h2>{item.years}</h2>
                <img src={removeIcon} onClick={() => handleRemove(item.id)} />
              </div>
            );
          })}
        </div>
        <Link to="/personal-info">
          <button>BACK</button>
        </Link>
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
