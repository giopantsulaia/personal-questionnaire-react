import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "./components/Personal";
import Skillset from "./components/Skillset";
function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="personal-info" element={<Personal />} />
          <Route path="technical-skillset" element={<Skillset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
