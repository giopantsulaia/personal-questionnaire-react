import React from "react";
import "./Covid.css";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../images/calendar.png";
export default function Covid({ linkStyle }) {
  const descStyles = {
    width: "705px",
    height: "606px",
  };
  const [formData, setFormData] = useState({
    preference: "",
    covidContact: "",
    vaccinated: "",
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
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="covid-title">Covid Stuff</h1>
        <form className="covid-stuff">
          <div className="work-preference">
            <h4 className="pref-title">how would you prefer to work?</h4>
            <label htmlFor="sairme">
              <input
                type="radio"
                name="preference"
                value="sairme"
                required
                id="sairme"
                onChange={handleChange}
              />
              From Sairme Office
            </label>
            <label htmlFor="home">
              <input
                type="radio"
                name="preference"
                value="home"
                required
                id="home"
                onChange={handleChange}
              />
              From Home
            </label>
            <label htmlFor="hybrid">
              <input
                type="radio"
                name="preference"
                value="hybrid"
                required
                onChange={handleChange}
                id="hybrid"
              />
              Hybrid
            </label>
          </div>
          <div className="covid-contact">
            <h4 className="contact-title">Did you contact covid 19? :(</h4>
            <label>
              <input
                type="radio"
                name="covidContact"
                value={true}
                required
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="covidContact"
                value={false}
                required
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {formData.covidContact == "true" && (
            <div className="covid-date">
              <h4>When?</h4>
              <ReactDatePicker
                className="datepicker"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Date"
                required
                maxDate={new Date()}
              />
              <img src={calendar} className="date-btn"></img>
            </div>
          )}
          <div className="covid-contact">
            <h4 className="contact-title">Have you been vaccinated?</h4>
            <label>
              <input
                type="radio"
                name="vaccinated"
                value={true}
                required
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="vaccinated"
                value={false}
                required
                onChange={handleChange}
              />
              No
            </label>
          </div>
          {formData.vaccinated == "true" && (
            <div className="covid-date">
              <h4>When did you get your last covid vaccine?</h4>
              <ReactDatePicker
                className="datepicker"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Date"
                required
                maxDate={new Date()}
              />
              <img src={calendar} className="date-btn2"></img>
            </div>
          )}
          <div className="pagination">
            <Link to="/technical-skillset" style={linkStyle}>
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
              <i className="fas fa-circle dark"></i>
            </Link>
            <Link to="/submit" style={linkStyle}>
              <i className="fas fa-circle dark"></i>
            </Link>
            <Link to="/insights" style={linkStyle}>
              <img src={next} className="next"></img>
            </Link>
          </div>
        </form>
        <div className="selected-skills"></div>
      </div>
      <div className="right-cont">
        <h1 className="covid-title">Redberry Covid Policies</h1>
        <p className="description" style={descStyles}>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {">"} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
    </main>
  );
}
