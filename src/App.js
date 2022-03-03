import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "./components/Personal";
import Skillset from "./components/Skillset";
import { useState } from "react";
import Covid from "./components/Covid";

function App() {
  const [input, setInput] = useState("");
  const [chosen, setChosen] = useState([]);
  function addSkill(taken) {
    setChosen([taken, ...chosen]);
  }
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="personal-info" element={<Personal />} />
          <Route
            path="technical-skillset"
            element={
              <Skillset
                addSkill={addSkill}
                input={input}
                setInput={setInput}
                chosen={chosen}
                setChosen={setChosen}
              />
            }
          />
          <Route path="covid" element={<Covid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
