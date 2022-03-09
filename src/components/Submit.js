import React from "react";
import "./Submit.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Submit({ userInfo }) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const url = "https://bootcamp-2022.devtest.ge/api/application";
  function filteredInfo() {
    if (userInfo.phone === "") {
      delete userInfo.phone;
    }
    if (userInfo.had_covid === false) {
      delete userInfo.had_covid_at;
    }
    if (userInfo.vaccinated === false) {
      delete userInfo.vaccinated_at;
    }
    if (userInfo.will_organize_devtalk === false) {
      delete userInfo.devtalk_topic;
    }
    return userInfo;
  }
  let navigate = useNavigate();

  filteredInfo();
  function onSubmit(e) {
    e.preventDefault();
    axios
      .post(url, userInfo, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
    navigate("/thankyou");
  }

  return (
    <div>
      <main className="submitPage">
        <div className="submit-cont">
          <button className="start-btn" onClick={onSubmit}>
            Submit
          </button>
          <Link to="/insights" className="submitted-apps">
            Go back
          </Link>
        </div>
      </main>
    </div>
  );
}
