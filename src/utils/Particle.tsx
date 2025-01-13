import React from "react";
import "./particle.scss"
import { ReactNode } from "react";

type ParticleProps = {
    children:ReactNode;
  }

const Particle: React.FC<ParticleProps> = ({children}) => {
  return (
    <section className=" h-[100vh] w-[100vw] relative overflow-hidden">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </section>
  );
};

export default Particle;
