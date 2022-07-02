import React from "react";
import "../index.css";
function Button2(props) {
  return (
    <>
      <label className="dropdown">
        <div className="dd-button2">Sort By</div>
        <input type="checkbox" className="dd-input" id="test" />
        <ul className="dd-menu">
          <li className="underline">Recent</li>
          <li className="underline">Upvotes</li>
          <li className="underline">Arithmetics</li>
        </ul>
      </label>
    </>
  );
}

export default Button2;
