import React from "react";

const Cosmetic = (props) => {
  console.log(props);
  const { name, id, price } = props.cosmetic;
  return (
    <div>
      <h1>Buy this: {name}</h1>
      <p>Only for: {price}</p>
      <p>It has ID: {id}</p>
    </div>
  );
};

export default Cosmetic;
