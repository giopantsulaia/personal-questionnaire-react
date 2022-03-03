import React from "react";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import { useState } from "react";
import "./Insights.css";
export default function Insights({ linkStyle }) {
  const [formData, setFormData] = useState({
    attendence: "",
    speakAbout: "",
    somethingSpecial: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  const descStyles = {
    width: "705px",
    height: "606px",
  };

  return (
    <div>
      <main className="main-container">
        <div className="left-cont">
          <h1 className="covid-title">What about you?</h1>
          <form className="devtalk">
            <div className="work-preference">
              <h4 className="pref-title">
                Would you attend Devtalks and maybe also organize your own?
              </h4>
              <label htmlFor="yes">
                <input
                  type="radio"
                  name="attendence"
                  value={true}
                  required
                  id="yes"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label htmlFor="no">
                <input
                  type="radio"
                  name="attendence"
                  value={false}
                  required
                  id="no"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            <div className="devtalk-cont">
              <h4 className="pref-title">
                Would you attend Devtalks and maybe also organize your own?
              </h4>
              <textarea
                placeholder="I would..."
                name="speakAbout"
                value={formData.speakAbout}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="devtalk-cont">
              <h4 className="pref-title">
                Would you attend Devtalks and maybe also organize your own?
              </h4>
              <textarea
                placeholder="I..."
                name="somethingSpecial"
                value={formData.somethingSpecial}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pagination">
              <Link to="/covid" style={linkStyle}>
                <img src={previous} className="previous"></img>
              </Link>
              <Link to="/personal-info" style={linkStyle}>
                <i className="fas fa-circle"></i>
              </Link>
              <Link to="/technical-skillset" style={linkStyle}>
                <i className="fas fa-circle"></i>
              </Link>
              <Link to="/covid" style={linkStyle}>
                <i className="fas fa-circle "></i>
              </Link>
              <Link to="/insights" style={linkStyle}>
                <i className="fas fa-circle"></i>
              </Link>
              <Link to="/covid" style={linkStyle}>
                <i className="fas fa-circle dark"></i>
              </Link>
              <Link to="/submit" style={linkStyle}>
                <img src={next} className="next"></img>
              </Link>
            </div>
          </form>
          <div className="selected-skills"></div>
        </div>
        <div className="right-cont">
          <h1 className="covid-title">Redberrian Insights</h1>
          <p className="description" style={descStyles}>
            We were soo much fun before the pandemic started! Parties almost
            every weekend and lavish employee birthday celebrations!
            Unfortunately, covid ruined that fun like it did almost everything
            else in the world. But we try our best to zhuzh it up a bit. For
            example, we host biweekly Devtalks where our senior and lead
            developers talk about topics they are passionate about. Previous
            topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold
            these talks in the office but you can join our Zoom broadcast as
            well. Feel free to join either as an attendee or a speaker!
          </p>
        </div>
      </main>
      );
    </div>
  );
}
