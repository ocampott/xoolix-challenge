import React, { useState } from "react";

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
    <div>
      <h1>Razas de perros</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar una raza de perro"
          value={text}
          onChange={handleInput}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
