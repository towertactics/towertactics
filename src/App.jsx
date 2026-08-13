import Aboutme from "./assets/components/AboutMe";
import Inspirations from "./assets/components/Inspirations";
import MainLine from "./assets/components/MainLine";
import Header from "./assets/components/Header";
import NavBar from "./assets/components/NavBar";

function App() {
  return (
    <div className="App">
      <div id="top-bar">
        <NavBar>

        </NavBar>
      </div>
      <div id="App">
      <div id="cardspace">
        <div id="left-cards">
          <Aboutme>
          </Aboutme>
          <Inspirations>
          </Inspirations>
        </div>
        <div id="right-cards">
          <Aboutme>
          </Aboutme>
        </div>
        <div id="mainline">
          <MainLine>
          </MainLine>
          </div>
        </div>"
      </div>
    </div>
  )
}

export default App;