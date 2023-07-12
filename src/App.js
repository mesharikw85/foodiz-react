import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import Recipes from "./pages/Recipes";
import American from "./pages/AmericanRecipes";
import Italian from "./pages/ItalianRecipes";
import Mexican from "./pages/MexicanRecipes";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <div>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/categories/recipes/american" element={<American />} />
            <Route path="/categories/recipes/italian" element={<Italian />} />
            <Route path="/categories/recipes/mexican" element={<Mexican />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
