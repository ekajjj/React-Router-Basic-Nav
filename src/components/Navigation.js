import React from 'react';
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link className="navLink" exact to="/">
          Home
          </Link>
        </div>
        <div>
          <Link className="navLink" exact to="/About">
          About
            </Link>
        </div>
        <div>
          <Link className="navLink" exact to="/Contact">
            Contact
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
