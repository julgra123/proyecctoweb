


import Home from "./Screens/INTRODUCCION";
import Services from "./Screens/ESTUDIO";
import HowWeWork from "./Screens/OBJETIVOS";
import Contact from "./Screens/ONG";
import NavBar from "./Components/NavBar";
import Benefits from "./Screens/BIBLIOGRAFIA";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;