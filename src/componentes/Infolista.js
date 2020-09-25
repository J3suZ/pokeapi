import React from "react";
import '../styles/Infolist.css'

function InformacionLista(props) {
  return <p className="menu__info">{props.info}</p>;
}

export default InformacionLista;
