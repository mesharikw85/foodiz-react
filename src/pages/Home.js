import React from "react";
import image from "../images/homeBG2.jpg";
import DisableElevation from "../components/Button";

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
        <center>
          <p
            style={{
              color: "black",
              marginBottom: 200,
              fontSize: 50,
              borderRadius: 100,
              height: 50,
            }}
          >
            In this website we will teach you how to cook some recipes in a very
            fast and effiecent way, you can also add and share your own recipes
            with others
          </p>
        </center>
        <center></center>
      </div>
    </div>
  );
};

export default Home;
