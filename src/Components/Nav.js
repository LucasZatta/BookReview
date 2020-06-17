import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="nav">
      <h3>LOGO</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/top">
          <li>Top Tens</li>
        </Link>

        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
