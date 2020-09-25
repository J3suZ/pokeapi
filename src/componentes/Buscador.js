import React from "react";
import { Input } from "antd";
import "../styles/Buscador.css";

const { Search } = Input;

const Buscador = () => {
  return (
    <div className="container__buscardor">
      <h1 className="container__title">¡Busca un pokemon!</h1>
      <Search
        className="container__input"
        placeholder="Buscar..."
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default Buscador;
