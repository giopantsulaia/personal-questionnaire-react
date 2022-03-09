import React from "react";
import { useState, useEffect } from "react";
import "./Applications.css";
import vector from "../images/Vector.png";
import vector2 from "../images/Vector2.png";
export default function Applications({ skills }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=e68bf5cc-f5b8-4611-8169-16da7818a576"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (isSubscribed) {
          setData((prevSkills) => ({
            ...prevSkills,
            err,
          }));
        }
        return () => (isSubscribed = false);
      });
  }, []);
  const [shownElements, setShownElements] = useState([]);
  function handleClick(index) {
    const contains = shownElements.some((obj) => {
      return obj.index === index;
    });
    if (contains) {
      setShownElements(
        shownElements.filter((e) => {
          return e.index !== index;
        })
      );
    } else {
      setShownElements([
        ...shownElements,
        {
          index: index,
        },
      ]);
    }
  }
  const styles = {
    border: "none",
    justifyContent: "space-evenly",
  };
  return (
    <div className="applications-body">
      <h1 className="applications-title">Submitted Applications</h1>
      <div className="app-container">
        {data.map((info, index) => {
          return (
            <div className="app" key={index}>
              <div className="app-header" onClick={() => handleClick(index)}>
                <p className="app-num">{index + 1}</p>
                <img
                  src={
                    shownElements.some((e) => {
                      return e.index == index;
                    })
                      ? vector2
                      : vector
                  }
                  className="vector"
                ></img>
              </div>
              {shownElements.map((obj) => {
                {
                  if (obj.index == index) {
                    return (
                      <div key={index} className="app-info">
                        <div className="left-info">
                          <h2 className="personal-info title">
                            Personal Information
                          </h2>
                          <div className="personal-information">
                            <div className="info-names">
                              <h5>First Name </h5>
                              <h5>Last Name </h5>
                              <h5>Email </h5>
                              {info.phone != null && <h5>Phone</h5>}
                            </div>
                            <div className="info">
                              <h5>{info.first_name}</h5>
                              <h5>{info.last_name}</h5>
                              <h5>{info.email}</h5>
                              {info.phone != null && <h5>{info.phone}</h5>}
                            </div>
                          </div>
                          <div className="covid-situation">
                            <h2 className="personal-info title">
                              Covid Situation
                            </h2>
                            <h5>how would you prefer to work?</h5>
                            <label htmlFor="sairme">
                              <input
                                type="radio"
                                name="work_preference"
                                disabled
                                defaultChecked={
                                  info.work_preference === "from_office"
                                }
                                id="sairme"
                              />
                              From Sairme Office
                            </label>
                            <label htmlFor="home">
                              <input
                                type="radio"
                                name="work_preference"
                                disabled
                                id="home"
                                defaultChecked={
                                  info.work_preference === "from_home"
                                }
                              />
                              From Home
                            </label>
                            <label htmlFor="hybrid">
                              <input
                                type="radio"
                                name="work_preference"
                                value="hybrid"
                                defaultChecked={
                                  info.work_preference === "hybrid"
                                }
                                disabled
                                id="hybrid"
                              />
                              Hybrid
                            </label>
                            <h5>Did you have covid 19?</h5>
                            <label>
                              <input
                                type="radio"
                                name="had_covid"
                                disabled
                                defaultChecked={info.had_covid}
                              />
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="had_covid"
                                disabled
                                defaultChecked={!info.had_covid}
                              />
                              No
                            </label>
                            {info.had_covid && (
                              <div className="had_covid_date">
                                <h5>When did you have covid 19?</h5>
                                <input
                                  type="date"
                                  name="had_covid_at"
                                  className="app-date"
                                  defaultValue={info.had_covid_at}
                                />
                              </div>
                            )}
                            <h5>Have you been vaccinated?</h5>
                            <label>
                              <input
                                type="radio"
                                name="vaccinated"
                                disabled
                                defaultChecked={info.vaccinated}
                              />
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="vaccinated"
                                disabled
                                defaultChecked={!info.vaccinated}
                              />
                              No
                            </label>
                            {info.vaccinated && (
                              <div>
                                <h5>When did you get your covid vaccine?</h5>
                                <input
                                  type="date"
                                  name="vaccinated_at"
                                  className="app-date"
                                  defaultValue={info.vaccinated_at}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="right-info">
                          <h2 className="personal-info title">Skillset</h2>
                          <div className="selected-skills">
                            {info.skills.map((item) => {
                              return (
                                <div
                                  className="skill-cont"
                                  key={Math.floor(Math.random() * 10000)}
                                  style={styles}
                                >
                                  <h2
                                    className="skill"
                                    key={Math.floor(Math.random() * 10000)}
                                  >
                                    {
                                      skills.find((e) => {
                                        return e.id === item.id;
                                      }).title
                                    }
                                  </h2>
                                  <h2
                                    className="exp"
                                    key={Math.floor(Math.random() * 10000)}
                                  >{`Years of Experience: ${item.experience}`}</h2>
                                </div>
                              );
                            })}
                          </div>
                          <h2 className="personal-info title">Insights</h2>
                          <div className="work-preference">
                            <h4>
                              Would you attend Devtalks and maybe also organize
                              your own?
                            </h4>
                            <label htmlFor="will_organize_devtalk">
                              <input
                                type="radio"
                                name="will_organize_devtalk"
                                defaultChecked={info.will_organize_devtalk}
                                disabled
                                id="will_organize_devtalk"
                              />
                              Yes
                            </label>
                            <label htmlFor="willnot_organize_devtalk">
                              <input
                                type="radio"
                                name="will_organize_devtalk"
                                defaultChecked={!info.will_organize_devtalk}
                                id="willnot_organize_devtalk"
                                disabled
                              />
                              No
                            </label>
                          </div>
                          {info.will_organize_devtalk && (
                            <div className="devtalk-cont">
                              <h4 className="pref-title">
                                What would you speak about at Devtalk?
                              </h4>
                              <textarea
                                placeholder={info.devtalk_topic}
                                disabled
                                name="devtalk_topic"
                              ></textarea>
                            </div>
                          )}
                          <div className="devtalk-cont">
                            <h4 className="pref-title">
                              Tell us something special
                            </h4>
                            <textarea
                              name="something_special"
                              placeholder={info.something_special}
                              disabled
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
