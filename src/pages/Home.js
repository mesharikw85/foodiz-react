import React from "react";
import image from "../assets/images/homeBG2.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="font-link"
        style={{
          backgroundImage: `url(${image})`,
          width: "100vw",
          height: "100vh",
          padding: 200,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <center>
          <div>
            <h2
              style={{
                color: "black",
                marginBottom: 200,
                fontSize: 100,
                borderRadius: 100,

                height: 50,
              }}
            >
              Welcome To Foodiez
            </h2>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Home;
