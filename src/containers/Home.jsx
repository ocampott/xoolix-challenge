import React, { useState, useEffect } from "react";
import { DogList } from "../components/DogList/DogList";
import { Filter } from "../components/Filter/Filter";
import { Favorites } from "../components/Favorites/Favorites";
import { getDogsBySearch } from "../services/getDogsBySearch";

export const Home = () => {
  /*Guardo la data del API */
  const [dogImg, setDogImg] = useState(null);
  /*Guardo la data del input de busqueda */
  const [raza, setRaza] = useState("");
  /* Div de inicio si no se realizo busqueda */
  const [start, setstart] = useState(true);

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

  return (
    <div>
      <Filter setBreed={setBreed} />
      {start ? (
        <div>Escribir una raza de perro en el buscador</div>
      ) : (
        <DogList dogImg={dogImg} />
      )}
      <Favorites />
    </div>
  );
};
