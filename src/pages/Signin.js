import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const { mutate: loginFun } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => setUser(true),
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    loginFun();
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Sign in</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign in
            </button>
          </div>
          <div className=" text-white text-lg font-bold mb-2 flex justify-center">
            dont have an account?
            <button>
              <NavLink
                to="/signup"
                className=" text-white text-lg font-bold mb-2 flex justify-center hover:bg-blue-600"
              >
                signup here
              </NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
