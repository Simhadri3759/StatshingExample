import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import { useContext } from "react";
import About from "./About";
import { MyContextDataProvider } from "./UseContext";
import Carrer from "./Carrer";
<<<<<<< Updated upstream
import MyTeam from "./MyTeam";
=======
import Experience from "./Experience";
>>>>>>> Stashed changes
function App() {
  return (
    <div>
      <MyContextDataProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="carrer" element={<Carrer/>} ></Route>
<<<<<<< Updated upstream
          <Route path="myTeam" element={<MyTeam/>}></Route>
=======
          <Route path="experiece" element={<Experience/>}></Route>
>>>>>>> Stashed changes
        </Routes>
      </MyContextDataProvider>
    </div>
  );
}

export default App;
