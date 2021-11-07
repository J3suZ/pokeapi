import React from "react";
import '../styles/List.css'

function List(props) {
  return <li className="menu__list-item">{props.text}</li>;
}

export default List;
