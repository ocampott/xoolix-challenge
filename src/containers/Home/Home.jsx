import React, { useState, useEffect } from "react";
import "./Home.css";
import { DogList } from "../../components/DogList/DogList";
import { Filter } from "../../components/Filter/Filter";
import { getDogsBySearch } from "../../services/getDogsBySearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  /*Guardo la data del API */
  const [dogList, setDogList] = useState([]);
  const [dogsFavoriteImg, setDogsFavoriteImg] = useState([]);

  /*Guardo la data del input de busqueda */
  const [raza, setRaza] = useState("");
  const handleChangeBreed = (breed) => {
    setRaza(breed);
  };

  /* Seteo los favoritos en localStorage*/
  let setFavorites = () => {
    let dogsFavorite = [];
    dogsFavorite = JSON.parse(localStorage.getItem("favorites")) || [];
    setDogsFavoriteImg(dogsFavorite);
  };

  /*Consumo la API */
  useEffect(() => {
    if (raza !== "") {
      getDogsBySearch(raza)
        .then((data) => {
          setDogList(data.message);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [raza]);

  /* Hook para printear favoritos*/
  useEffect(() => {
    setFavorites();
  }, []);

  return (
    <div>
      <Filter setBreed={handleChangeBreed} />
      {dogList.length === 0 ? (
        <div>
          <p>
            Escriba una raza de perro en el buscador para ver hasta 10 imagenes
            de la misma.
          </p>
          <p>
            Las razas se pueden encontrar en este{" "}
            <a href="https://dog.ceo/dog-api/documentation/">link</a>
          </p>
        </div>
      ) : (
        <DogList dogList={dogList} setFavorites={setFavorites} />
      )}
      {dogsFavoriteImg.length === 0 ? (
        <></>
      ) : (
        <>
        <hr className="home-hr"/>
          <h1 className="home-h1">
            <FontAwesomeIcon className="home-heart" icon={faHeart} />
            Favoritos
          </h1>
        </>
      )}
      <DogList dogList={dogsFavoriteImg} setFavorites={setFavorites} />
    </div>
  );
};
