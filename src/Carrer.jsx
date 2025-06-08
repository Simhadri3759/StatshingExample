import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MyContextData } from "./UseContext";

export default class Carrer extends Component {
  render() {
    return (
      <MyContextData.Consumer>
        {({ empId, setEmpID, userId, setUserId }) => (
          <div>
            <h1>empId:{empId}</h1>
            <h1>userID:{userId}</h1>
            <h1>This is carrer Page</h1>
            <Link to="/">Back to Home</Link>
          </div>
        )}
      </MyContextData.Consumer>
    );
  }
}
