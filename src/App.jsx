import MainLine from "./assets/components/MainLine";
import NavBar from "./assets/components/NavBar";

import WritersCorner from "./pages/WritersCorner";

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";

function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const isWritersCornerRoute = path === "/writerscorner";

  return (
    <div className="App">
      <div id="top-bar">
        <NavBar>
        </NavBar>
      </div>
      <div id="App">
      <div id="cardspace">
        <div id="left-cards">
        </div>
        <div id="right-cards">
        </div>
        <div id="mainline">
          {isWritersCornerRoute ? (
            <WritersCorner />
          ) : (
            <MainLine>
            </MainLine>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;