import React from "react";
import { Dogs } from "../Dogs/Dogs";
import "./DogList.css"


export const DogList = ({ dogImg }) => {

  const dogImgs = dogImg.slice(0, 10);

  return (
    <div className="dogList-container">
      {dogImgs.map((dogs) => (
        <Dogs dogs={dogs} />
      ))}
    </div>
  );
};
