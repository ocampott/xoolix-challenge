import React, { useState, useEffect } from "react";
import { DogList } from "../components/DogList/DogList";
import { Filter } from "../components/Filter/Filter";
import { getDogsBySearch } from "../services/getDogsBySearch";

export const Home = () => {
  /*Guardo la data del API */
  const [dogImg, setDogImg] = useState(null);
  /*Guardo la data del input de busqueda */
  const [raza, setRaza] = useState("");
  /* Div de inicio si no se realizo busqueda y favoritos*/
  const [start, setstart] = useState(true);
  const [dogsFavoriteImg, setDogsFavoriteImg] = useState([]);

  /*Consumo la API */
  useEffect(() => {
    if (raza !== "") {
      getDogsBySearch(raza)
        .then((data) => {
          setDogImg(data.message);
          setstart(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setstart(true);
    }
  }, [raza]);

  const setBreed = (breed) => {
    setRaza(breed);
  };
  /* Hook para printear favoritos */
  useEffect(() => {
    setFavorites()
  }, [dogsFavoriteImg])
  
  let setFavorites = () => {
    let dogsFavorite= [];
    dogsFavorite = JSON.parse(localStorage.getItem("favorites"));
    setDogsFavoriteImg(dogsFavorite)
  }
  return (
    <div>
      <Filter setBreed={setBreed} />
      {start ? (
        <div>Escribir una raza de perro en el buscador</div>
      ) : (
        <DogList dogImg={dogImg} setFavorites={setFavorites}/>
      )}
      <h1>Favoritos</h1>
      <DogList dogImg={dogsFavoriteImg} setFavorites={setFavorites}/>
    </div>
  );
};
