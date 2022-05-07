import React from "react";
import { Dogs } from "./Dogs";

export const DogList = ({ dogImg }) => {
  return (
    <div>
      {dogImg.map((dogs) => (
        <Dogs dogs={dogs} />
      ))}
      <Dogs />
    </div>
  );
};
