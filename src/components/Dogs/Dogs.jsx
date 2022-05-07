import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./Dogs.css"

export const Dogs = ({ dogs }) => {

  /* Estado del like a las imagenes*/
  const [liked, setLiked] = useState(false)
  const handleCheckboxChange = () => {
    setLiked(!liked)
    setFavorite(dogs)
  }

  /*Estado en el localStorage*/
  const [favorite, setFavorite] = useLocalStorage('favorite', [])

  return (
    <div className="dogs-box">
      <img src={dogs} alt="Dogs imgs by breed" className="dogs-img" />
      <label className="dogs-like">
        {
          liked ? <FontAwesomeIcon className="dogs-like-icon" onClick={handleCheckboxChange} icon={faHeartCircleCheck} /> : <FontAwesomeIcon className="dogs-like-icon" onClick={handleCheckboxChange} icon={faHeart} />
        }
      </label>
    </div>
    
  );
};
