import "./App.css";
import "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import Recipe from "./pages/Recipe";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <div className="app">
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
