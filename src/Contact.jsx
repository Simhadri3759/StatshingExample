import React from "react";
import { Link } from "react-router-dom";
import { useMyContextData } from "./UseContext";
const Contact = () => {
  const { empId, setEmpID, userId, setUserId } = useMyContextData();
  console.log(empId + "myEmpId")
  console.log(userId + "it is my User Id")
  return (
    <div>
      <div>
        <h1>This is contact section </h1>
        <h1> my empId :{localStorage.getItem("empID")}</h1>
        <h2>my userID :{localStorage.getItem("userid")}</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
