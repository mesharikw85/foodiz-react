import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </Link>
    </nav>
  );
};

export default Navbar;
