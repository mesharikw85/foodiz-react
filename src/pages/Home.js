import React from "react";

import image from "../assets/images/img 3.avif";

const Home = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <img src={image} alt="bg image" className="backgroundimage" />
      <h1 class="text-red-700 font-bold">Wellcome To Home page</h1>
    </div>
  );
};

export default Home;
