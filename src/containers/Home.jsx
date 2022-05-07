import React, { useState, useEffect } from "react";
import { DogList } from "../components/DogList";
import { Filter } from "../components/Filter";
import { getDogsBySearch } from "../services/getDogsBySearch";

export const Home = () => {
  /*Guardo la data del API */
  const [loading, setLoading] = useState(true);
  const [dogImg, setDogImg] = useState(null);
  /*Guardo la data del input de busqueda */
  const [raza, setRaza] = useState("corgi");

  /*Consumo la API */
  useEffect(() => {
    getDogsBySearch(raza).then((data) => {
      setDogImg(data.message);
      setLoading(false);
    });
  }, [raza]);

  const setBreed = (breed) => {
    setRaza(breed);
  };

  return (
    <div>
      <Filter setBreed={setBreed} />
      {loading ? <div>Cargando</div> : <DogList dogImg={dogImg} />}
    </div>
  );
};
