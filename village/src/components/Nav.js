import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./styling/Smurfs.css";

const Nav = props => {
  console.log(props);
  return (
    <div className="navlink">
      {props.location.pathname === "/smurf-form" ? (
        <Link to="/">Back</Link>
      ) : (
        <Link to="/smurf-form">Create New Smurf!</Link>
      )}
    </div>
  );
};

export default withRouter(Nav);
