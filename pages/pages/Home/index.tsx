import React from "react";
import Particle from "../../particles";
import HomeWr from "./HomeWrapper";

// @ts-ignore
const Home = ({ children }) => {
  return (
    <HomeWr>
      <Particle />
      {children}
    </HomeWr>
  );
};

export default Home;
