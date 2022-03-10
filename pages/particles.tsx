import React from "react";
import particles_conf from "./particles.config";
import Particles from "react-tsparticles";
const Particle = () => {
  return (
    <div>
      <Particles params={particles_conf} />
    </div>
  );
};

export default Particle;
