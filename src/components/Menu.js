import React from "react";
/* import InformacionLista from "./Infolista"; */
import List from "./List";
import "../styles/Menu.css";
import imagen from "./Formulario";

const Menu = () => {
  return (
    <nav className="menu">
      {/* <img alt="foto de perfil" src={imagen}/> */}
      {<Imagen img={imagen}/>}
      <button className="menu__btn" onClick={accionarMenu}>
        <h2>+</h2>
      </button>
      <ul className="menu__list">
        <List text="Nombre:" />
        {<li className="menu__subList" id="subName"></li>}
        <List text="Pokemon Favorito:" />
        {<li className="menu__subList" id="subPoke"></li>}
        <List text="Tu edad es de:" />
        {<li className="menu__subList" id="subEdad"></li>}
        <List text="Elemento Favorito" />
        {<li className="menu__subList" id="subElemen"></li>}
      </ul>
    </nav>
  );
};

/* <InformacionLista info="" /> */

function accionarMenu() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".menu__btn h2").classList.toggle("active");
}

function Imagen(props) {
  return <div className="menu__img">{<img alt="foto" src={props.img} />}</div>;
}

export default Menu;
