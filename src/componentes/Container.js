import React from "react";
import "../styles/Container.css";
import  Buscador  from "./Buscador";

const Container = () => {
  return (
    <div className="container">
      <Buscador/>
      <ul className="container__datos">
        <li className="container__data">datos</li>
        <li className="container__data">datos</li>
        <li className="container__data">datos</li>
        <li className="container__data">datos</li>
        <li className="container__data">datos</li>
        <li className="container__data">datos</li>
      </ul>
    </div>
  );
};

export default Container;
