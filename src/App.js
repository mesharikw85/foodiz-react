import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
