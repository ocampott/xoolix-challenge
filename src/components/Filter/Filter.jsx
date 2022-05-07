import React, { useState } from "react";
import "./Filter.css"
import lupa from "../../assets/filter-btn-lupa.png"

export const Filter = (props) => {
  /* Para la busqueda */
  const [text, setText] = useState("");
  const handleInput = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setBreed(text);
  };

  return (
    <div className="filter">
      <h1 className="filter-h1">Razas de perro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar una raza de perro"
          value={text}
          onChange={handleInput}
          className="filter-input"
        />
        <button className="filter-btn" type="submit"><img className="filter-btn-img" alt="lupa" src={lupa}></img>Buscar</button>
      </form>
    </div>
  );
};
