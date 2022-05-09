import React from "react";
import { validateFavorites } from "../../utils/validateFavorites";
import { DogCard } from "../DogCard/DogCard";
import "./DogList.css";

export const DogList = ({ dogList, setFavorites }) => {

  /* Limito la busqueda a 10 imagenes*/
  const dogImgs = dogList.slice(0, 10);
  
  /*Data de los perros en localStorage */
  const oldData = JSON.parse(localStorage.getItem("favorites")) || [];

  /* Agregar perros a favoritos en localStorage*/
  let addFavorite = (dog) => {
    if (localStorage.getItem("favorites") == null) {
      localStorage.setItem("favorites", "[]");
    }
    let data = JSON.parse(localStorage.getItem("favorites"));
    data.push(dog);
    localStorage.setItem("favorites", JSON.stringify(data));
    setFavorites()
  };

  /*Eliminar los perros favoritos en el localStorage*/
  let removeFavorite = (dog) => {
    let data = [];
    data = JSON.parse(localStorage.getItem("favorites"));
    for (var i = 0; i < data.length; i++) {
      if (data[i] === dog) {
        data.splice(i, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(data));
    setFavorites()
  };

  return (
    <div className="dogList-container">
      {dogImgs.map((dog) => {
        const isFavorite = validateFavorites(dog, oldData)
        return (
          <DogCard
            key={dog}
            dog={dog}
            isFavorite={isFavorite}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        );
      })}
    </div>
  );
};
