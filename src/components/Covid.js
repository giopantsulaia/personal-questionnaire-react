import React from "react";
import "./Covid.css";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function Covid({ linkStyle, userInfo, setUserInfo }) {
  const descStyles = {
    width: "705px",
    height: "606px",
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/insights");
  }
  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="covid-title">Covid Stuff</h1>
        <form className="covid-stuff" onSubmit={handleSubmit}>
          <div className="work-preference">
            <h4 className="pref-title">how would you prefer to work?</h4>
            <label htmlFor="sairme">
              <input
                type="radio"
                name="work_preference"
                value="from_office"
                required
                id="sairme"
                onChange={handleChange}
              />
              From Sairme Office
            </label>
            <label htmlFor="home">
              <input
                type="radio"
                name="work_preference"
                value="from_home"
                required
                id="home"
                onChange={handleChange}
              />
              From Home
            </label>
            <label htmlFor="hybrid">
              <input
                type="radio"
                name="work_preference"
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
                name="had_covid"
                value={true}
                required
                onClick={() => {
                  setUserInfo((prevInfo) => {
                    return {
                      ...prevInfo,
                      had_covid: true,
                    };
                  });
                }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="had_covid"
                value={false}
                required
                onClick={() => {
                  setUserInfo((prevInfo) => {
                    return {
                      ...prevInfo,
                      had_covid: false,
                      had_covid_at: "",
                    };
                  });
                }}
              />
              No
            </label>
          </div>

          {userInfo.had_covid && (
            <div className="covid-date">
              <h4>When?</h4>
              <input
                type="date"
                name="had_covid_at"
                className="datePicker"
                value={userInfo.had_covid_at}
                required
                placeholder="Date"
                onChange={handleChange}
              />
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
                onClick={() => {
                  setUserInfo((prevInfo) => {
                    return {
                      ...prevInfo,
                      vaccinated: true,
                    };
                  });
                }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="vaccinated"
                value={false}
                required
                onClick={() => {
                  setUserInfo((prevInfo) => {
                    return {
                      ...prevInfo,
                      vaccinated: false,
                      vaccinated_at: "",
                    };
                  });
                }}
              />
              No
            </label>
          </div>
          {userInfo.vaccinated && (
            <div className="covid-date">
              <h4>When did you get your last covid vaccine?</h4>
              <input
                type="date"
                name="vaccinated_at"
                className="datePicker"
                required
                value={userInfo.vaccinated_at}
                placeholder="Date"
                onChange={handleChange}
              />
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
            <button className="button-dark">
              <i className="fas fa-circle dark"></i>
            </button>

            <i className="fas fa-circle dark"></i>

            <button className="arrow-right">
              <img src={next} className="next"></img>
            </button>
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
