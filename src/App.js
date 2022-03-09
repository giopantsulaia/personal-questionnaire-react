import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "./components/Personal";
import Skillset from "./components/Skillset";
import { useState, useEffect } from "react";
import Covid from "./components/Covid";
import Insights from "./components/Insights";
import Submit from "./components/Submit";
import Applications from "./components/Applications";
import Thanks from "./components/Thanks";
function App() {
  const [input, setInput] = useState("");
  const [chosen, setChosen] = useState([]);
  function addSkill(taken) {
    setChosen([taken, ...chosen]);
  }
  function getFormInfo() {
    const storedInfo = localStorage.getItem("form");
    if (!storedInfo)
      return {
        token: "729327e1-18c9-4d17-a77e-9e04ab63fec7",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        skills: [],
        work_preference: "",
        had_covid: false,
        had_covid_at: "",
        vaccinated: false,
        vaccinated_at: "",
        will_organize_devtalk: false,
        devtalk_topic: "",
        something_special: "",
      };
    return JSON.parse(storedInfo);
  }
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => {
        if (isSubscribed) {
          setSkills((prevSkills) => ({
            ...prevSkills,
            err,
          }));
        }
        return () => (isSubscribed = false);
      });
  }, []);
  const [userInfo, setUserInfo] = useState(getFormInfo);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(userInfo));
  }, [userInfo]);
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="" element={<Main />} />
          <Route
            path="personal-info"
            element={<Personal setUserInfo={setUserInfo} userInfo={userInfo} />}
          />
          <Route
            path="technical-skillset"
            element={
              <Skillset
                addSkill={addSkill}
                input={input}
                setInput={setInput}
                chosen={chosen}
                setChosen={setChosen}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                skills={skills}
                setSkills={setSkills}
              />
            }
          />
          <Route
            path="covid"
            element={<Covid userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route
            path="insights"
            element={<Insights userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route path="submit" element={<Submit userInfo={userInfo} />} />
          <Route
            path="applications"
            element={<Applications skills={skills} />}
          />
          <Route path="thankyou" element={<Thanks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
