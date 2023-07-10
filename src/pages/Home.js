import React from "react";
import image from "../images/homeBG2.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: "100vw",
          height: "100vh",
          padding: 200,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Home;
