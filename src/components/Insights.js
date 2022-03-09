import React from "react";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import "./Insights.css";
import { useNavigate } from "react-router-dom";
export default function Insights({ linkStyle, userInfo, setUserInfo }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }
  const descStyles = {
    width: "705px",
    height: "606px",
  };
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/submit");
  }
  return (
    <div>
      <main className="main-container">
        <div className="left-cont">
          <h1 className="covid-title">What about you?</h1>
          <form className="devtalk" onSubmit={handleSubmit}>
            <div className="work-preference">
              <h4 className="pref-title">
                Would you attend Devtalks and maybe also organize your own?
              </h4>
              <label htmlFor="yes">
                <input
                  type="radio"
                  name="will_organize_devtalk"
                  value={true}
                  required
                  id="yes"
                  onClick={() => {
                    setUserInfo((prevInfo) => {
                      return {
                        ...prevInfo,
                        will_organize_devtalk: true,
                      };
                    });
                  }}
                />
                Yes
              </label>
              <label htmlFor="no">
                <input
                  type="radio"
                  name="will_organize_devtalk"
                  value={false}
                  required
                  id="no"
                  onClick={() => {
                    setUserInfo((prevInfo) => {
                      return {
                        ...prevInfo,
                        will_organize_devtalk: false,
                        devtalk_topic: "",
                      };
                    });
                  }}
                />
                No
              </label>
            </div>
            {userInfo.will_organize_devtalk && (
              <div className="devtalk-cont">
                <h4 className="pref-title">
                  What would you speak about at Devtalk?
                </h4>
                <textarea
                  placeholder="I would..."
                  name="devtalk_topic"
                  required
                  value={userInfo.devtalk_topic}
                  onChange={handleChange}
                ></textarea>
              </div>
            )}
            <div className="devtalk-cont">
              <h4 className="pref-title">Tell us something special</h4>
              <textarea
                placeholder="I..."
                name="something_special"
                value={userInfo.something_special}
                onChange={handleChange}
                required
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
              <button className="button-dark">
                <i className="fas fa-circle dark"></i>
              </button>
              <button className="arrow-right">
                <img src={next} className="next"></img>
              </button>
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
