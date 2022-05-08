import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Dogs.css";

export const Dogs = ({ dogs, validateFavorites, setFavorites }) => {
  /* Estado del like a las imagenes*/
  const [liked, setLiked] = useState(validateFavorites(dogs));
  /*Guardar los favoritos en el localStorage*/
  let setFavorite = (dogs) => {
    if (localStorage.getItem("favorites") == null) {
      localStorage.setItem("favorites", "[]");
    }
    let oldData = JSON.parse(localStorage.getItem("favorites"));
    oldData.push(dogs);
    localStorage.setItem("favorites", JSON.stringify(oldData));
  };
  /*Eliminar los favoritos en el localStorage*/
  let removeFavorites = (dogs) => {
    let oldData = [];
    oldData = JSON.parse(localStorage.getItem("favorites"));
    for (var i = 0; i < oldData.length; i++) {
      if (oldData[i] === dogs) {
        oldData.splice(i, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(oldData));
  };

  return (
    <div className="dogs-box">
      <img src={dogs} alt="Dogs imgs by breed" className="dogs-img" />
      <label className="dogs-like">
        {liked ? (
          <FontAwesomeIcon
            className="dogs-like-icon-red"
            onClick={() => {
              setLiked(!liked);
              removeFavorites(dogs);
            }}
            icon={faHeart}
          />
        ) : (
          <FontAwesomeIcon
            className="dogs-like-icon-white"
            onClick={(e) => {
              setLiked(!liked);
              setFavorite(dogs);
            }}
            icon={faHeart}
          />
        )}
      </label>
    </div>
  );
};
