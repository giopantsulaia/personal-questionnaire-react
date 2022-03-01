import React, { useState, useEffect } from "react";
import "./Skillset.css";

export default function Skillset() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSkills(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="technical-title">Tell us about your skills</h1>
        <div className="skill-inputs">
          <select className="skill-select">
            <option selected disabled hidden className="skills">
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
            name="exp"
            className="years-exp"
          />
          <button className="add-skill">Add Programming Language</button>
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
