import React from "react";

export const Dogs = ({ dogs }) => {
  return (
    <div>
      <img src={dogs} alt="" className="dogs-img" />
    </div>
  );
};
