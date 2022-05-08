import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Dogs.css";

export const DogCard = ({ dog, isFavorite, addFavorite, removeFavorite }) => {
  return (
    <div className="dogs-box">
      <img src={dog} alt="Dogs imgs by breed" className="dogs-img" />
      <label className="dogs-like">
        {isFavorite ? (
          <FontAwesomeIcon
            className="dogs-like-icon-red"
            onClick={() => {
              removeFavorite(dog);
            }}
            icon={faHeart}
          />
        ) : (
          <FontAwesomeIcon
            className="dogs-like-icon-white"
            onClick={(e) => {
              addFavorite(dog);
            }}
            icon={faHeart}
          />
        )}
      </label>
    </div>
  );
};
