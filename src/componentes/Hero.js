import React from "react";
import Header from "./Header"
import Menu from "./Menu"
import '../styles/Hero.css'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <Menu />
      <HeroContent/>
    </div>
  );
};

export default Hero;
