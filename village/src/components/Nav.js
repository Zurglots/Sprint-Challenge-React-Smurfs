import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = props => {
  console.log(props);
  return (
    <div>
      {props.location.pathname === "/smurf-form" ? (
        <Link to="/">Back</Link>
      ) : (
        <Link to="/smurf-form">Create New Smurf!</Link>
      )}
    </div>
  );
};

export default withRouter(Nav);
