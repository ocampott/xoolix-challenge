import React from "react";
import { Dogs } from "../Dogs/Dogs";
import "./DogList.css";

export const DogList = ({ dogImg, setFavorites }) => {
  const dogImgs = dogImg.slice(0, 10);

  /*Chequear si la imagen ya se encuentra en favoritos*/
  let oldData = [];
  oldData = JSON.parse(localStorage.getItem("favorites"));

  let validateFavorites = (dogs) => {
    let isFavorite = false;
    if (oldData != null) {
      for (var i = 0; i < oldData.length; i++) {
        if (dogs === oldData[i]) {
          isFavorite = true;
        }
      }
      return isFavorite;
    } else {
      return isFavorite;
    }
  };

  return (
    <div className="dogList-container">
      {dogImgs.map((dogs) => (
        <Dogs key={dogs} dogs={dogs} validateFavorites={validateFavorites} setFavorites={setFavorites}/>
      ))}
    </div>
  );
};
