import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMyContextData } from "./UseContext";
const Home = () => {
  const { empId, setEmpID, userId, setUserId } = useMyContextData();
  useEffect(() => {
    setTimeout(() => {
      setEmpID("33939")
      setUserId("12323")
      localStorage.setItem("empID",200)
      localStorage.setItem("useriD",500)
    }, 50);
  }, []);
  return (
    <div>
      <div>
        <h1>Welcome to Home</h1>
        <h1>my empId :{localStorage.getItem("empID")}</h1>
        <h1>my userID :{localStorage.getItem("userid")} </h1>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link to="contact">contact</Link>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="carrer">Carrer</Link>
          <Link to="myTeam">Myteam</Link>
          <Link to="experiece">Experience</Link>
          <Link to="customers">Customers</Link>
          <Link to="singup">singup</Link>
        </nav>
        <button style={{ marginTop: "1rem", cursor: "pointer" }}>
          Dark/white-btn
        </button>
      </div>
    </div>
  );
};

export default Home;
