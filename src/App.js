import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import { useContext } from "react";
import About from "./About";
import { MyContextDataProvider } from "./UseContext";
import Carrer from "./Carrer";
import MyTeam from "./MyTeam";
import Experience from "./Experience";
import Customers from "./Customers";
import SingUpPage from "./SingUpPage";
function App() {
  return (
    <div>
      <MyContextDataProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="carrer" element={<Carrer/>} ></Route>
          <Route path="myTeam" element={<MyTeam/>}></Route>
          <Route path="experiece" element={<Experience/>}></Route>
          <Route path="customers" element={<Customers/>}></Route>
          <Route path="singup" element={<SingUpPage/>}></Route>
        </Routes>
      </MyContextDataProvider>
    </div>
  );
}

export default App;
