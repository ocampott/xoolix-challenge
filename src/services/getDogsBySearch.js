/*Servicio para llamar a la API*/
export const getDogsBySearch = async (search) => {
  const res = await fetch(`https://dog.ceo/api/breed/${search}/images`);
  const data = await res.json();
  return Promise.resolve(data);
};
