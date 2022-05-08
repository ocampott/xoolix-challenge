import React from "react";
import { validateFavorites } from "../../utils/validateFavorites";
import { DogCard } from "../DogCard/DogCard";
import "./DogList.css";

export const DogList = ({ dogList, setFavorites }) => {
  const dogImgs = dogList.slice(0, 10);
  const oldData = JSON.parse(localStorage.getItem("favorites"));

  let addFavorite = (dog) => {
    if (localStorage.getItem("favorites") == null) {
      localStorage.setItem("favorites", "[]");
    }
    let oldData = JSON.parse(localStorage.getItem("favorites"));
    oldData.push(dog);
    localStorage.setItem("favorites", JSON.stringify(oldData));
    setFavorites()
  };

  /*Eliminar los favoritos en el localStorage*/
  let removeFavorite = (dog) => {
    let oldData = [];
    oldData = JSON.parse(localStorage.getItem("favorites"));
    for (var i = 0; i < oldData.length; i++) {
      if (oldData[i] === dog) {
        oldData.splice(i, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(oldData));
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
