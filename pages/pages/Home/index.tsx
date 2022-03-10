import Particle from "../../particles";
import HomeWr from "./HomeWrapper";
import * as React from 'react';
import{ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const Home = ({ children }:Props) => {
  return (
    <HomeWr>
      <Particle />
      {children}
    </HomeWr>
  );
};

export default Home;
