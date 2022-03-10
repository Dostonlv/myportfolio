import Particle from "../../particles";
import HomeWr from "./HomeWrapper";
import * as React from 'react';

// @ts-ignore
const Home = ({ children }:Props) => {
  return (
    <HomeWr>
      <Particle />
      {children}
    </HomeWr>
  );
};

export default Home;
