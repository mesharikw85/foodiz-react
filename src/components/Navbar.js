import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-semibold text-xl text-white bg-blue-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">Foodiez</span>
            </Link>
          </div>
          <Link to="/">
            <span className="font-semibold text-xl text-white">Home</span>
          </Link>
          <Link to="/">
            <span className="font-semibold text-xl text-white">Recipe</span>
          </Link>

          <Link to="/signin">
            <span className="font-semibold text-xl text-white ">Sign In</span>
          </Link>
          <NavLink to="/" className="font-semibold text-xl text-white ">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
