import React from "react";
import "../styles/Header.css";
import logo from "../styles/pokemon112.png";

import Filtrado from './Filtrado'

const Header = () => {
  return (
    <header className="header">
      <img className="heade__img" src={logo} alt="logo"/>
      <h2 className="header__title">PokeAPI</h2>
      <Filtrado/>
      <Filtrado/>
    </header>
  );
};

export default Header;
