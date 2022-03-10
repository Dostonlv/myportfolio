import React from "react";
import particles_conf from "./particles.config";
import Particles from "react-tsparticles";
const Particle = () => {
    return (
    <div>
      <Particles params={{
          particles: {
              color: {
                  value: "#000000"
              },
              line_linked: {
                  color: {
                      value: "#000000"
                  }
              },
              number: {
                  value: 50
              },
              size: {
                  value: 3
              }
          }
      }} />
    </div>
  );
};

export default Particle;
