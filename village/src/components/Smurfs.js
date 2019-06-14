import React, { Component } from "react";

import Smurf from "./Smurf";
import "./styling/Smurfs.css";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf">
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
