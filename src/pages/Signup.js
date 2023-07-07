import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { registerNew } from "../api/auth";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
    // else {
    //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    // }
  };
  const { mutate: registerfn } = useMutation({
    mutationFn: () => registerNew(userInfo),
    onSuccess: () => {
      setUser(true);
      Navigate("/");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.password &&
      userInfo.email !== "the Password or email not true"
    ) {
      alert("Wrong password or email");
      return;
    }
    registerfn();
  };
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="user"
              name="user"
              id="user"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Confirm Password
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
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
