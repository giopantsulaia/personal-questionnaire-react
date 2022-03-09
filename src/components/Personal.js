import React from "react";
import "./Personal.css";
import { Link } from "react-router-dom";
import previous from "../images/Previous.png";
import next from "../images/Next.png";
import { useNavigate } from "react-router";
export default function Personal({ linkStyle, setUserInfo, userInfo }) {
  //------------------------------------------------------------------
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
    navigate("/technical-skillset");
  }
  return (
    <main className="main-container">
      <div className="left-cont">
        <h1 className="personal-title">
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <form className="personal-inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={userInfo.first_name}
            onChange={handleChange}
            required
            minLength="2"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={userInfo.last_name}
            onChange={handleChange}
            required
            minLength="2"
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
            type="tel"
            id="phone"
            name="phone"
            placeholder="+995 5_ _ _ _"
            pattern="\+[0-9]{12}"
            value={userInfo.phone}
            onInvalid={() => {
              alert("phone number must be georgian: (+995)-123-456-789 ");
            }}
            onChange={handleChange}
          />
          <div className="pagination">
            <Link to="/" style={linkStyle}>
              <img src={previous} className="previous" />
            </Link>
            <Link to="/personal-info" style={linkStyle}>
              <i className="fas fa-circle"></i>
            </Link>
            <button className="button-dark">
              <i className="fas fa-circle dark"></i>
            </button>

            <i className="fas fa-circle dark"></i>

            <i className="fas fa-circle dark"></i>

            <i className="fas fa-circle dark"></i>

            <button className="arrow-right">
              <img src={next} className="next"></img>
            </button>
          </div>
        </form>
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
