import React from "react";
import "../index.css";
function Button1(props) {
  return (
    <>
      <label className="dropdown">
        <div className="dd-button">All topics</div>
        <input type="checkbox" className="dd-input" id="test" />
        <ul className="dd-menu">
          <li className="underline">Algebra</li>
          <li className="underline">Statistics</li>
          <li className="underline">Arithmetics</li>
        </ul>
      </label>
    </>
  );
}

export default Button1;
