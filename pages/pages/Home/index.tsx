import Particle from "../../particles";
import HomeWr from "./HomeWrapper";
import * as React from 'react';
import{ReactNode} from 'react';

type Props = {
  children?: ReactNode;
};``
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
