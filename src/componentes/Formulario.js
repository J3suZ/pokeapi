import React from "react";
import "../styles/Formulario.css";
import List from "./List";

const ContainerForm = () => {
  return (
    <div className="container-form">
      <Formulario />
    </div>
  );
};

function Formulario() {
  return (
    <div className="form">
      <List text="Ingresa una foto de perfil" />
      <input
        name="foto"
        type="url"
        placeholder="Ingrese la URL de una imagen"
        id="foto"
        title="Selecciona una imagen"
      />
      <input type="text" placeholder="Usuario" id="nombre" />
      <input type="text" placeholder="Pokemon favorito" id="pokemon" />
      <input
        className="form__edad"
        type="number"
        placeholder="Ingresa tu edad"
        id="edad"
        max="100"
        min="0"
      />
      <input type="text" placeholder="Elemento favorito" id="elemento" />
      <button type="button" className="form__btn" onClick={recogerDatos}>
        Submit
      </button>
    </div>
  );
}

const recogerDatos = () => {
  let imagen = document.getElementById("foto").value;
  let nombre = document.getElementById("nombre").value;
  let pokemonFav = document.getElementById("pokemon").value;
  let edad = document.getElementById("edad").value;
  let elemento = document.getElementById("elemento").value;
  if (edad < 18) {
    document.querySelector(".form__edad").classList.add("error");
  } else {
    document.querySelector(".form__edad").classList.remove("error");
    /* document.getElementById("subImg").innerHTML = imagen; */
    document.getElementById("subName").innerHTML = nombre;
    document.getElementById("subPoke").innerHTML = pokemonFav;
    document.getElementById("subEdad").innerHTML = edad;
    document.getElementById("subElemen").innerHTML = elemento;
    document.querySelector(".container-form").classList.add("active");
    document.querySelector(".form").classList.add("active");
  }
};

export default ContainerForm;
