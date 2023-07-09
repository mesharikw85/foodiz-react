import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { logOut } from "../api/auth";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const handleLogout = () => {
    logOut();
    setUser(false);
  };
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className="font-semibold text-xl text-white bg-blue-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">Foodiez</span>
            </Link>
          </div>

          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/recipe"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Recipe
                </NavLink>
                {user ? (
                  <>
                    <NavLink
                      to="/profile"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Profile
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <NavLink to="/signin">
                        <div>logout</div>
                      </NavLink>
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/signin"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <div>login</div>
                    </NavLink>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
