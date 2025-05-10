import React from "react";
import { Link } from "react-router-dom";
// a href
// link to
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOMEPAGE</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
