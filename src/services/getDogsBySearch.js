/*Servicio para llamar a la API*/
export const getDogsBySearch = async (search) => {
  const res = await fetch(`https://dog.ceo/api/breed/${search}/images`);
  const data = await res.json();
  if (res.ok) {
    return Promise.resolve(data);
  } else {
    return res.text().then((text) => {
      throw new Error(text);
    });
  }
};
