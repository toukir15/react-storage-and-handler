import React from "react";

const Cosmatic = (props) => {
  console.log(props);
  const { name, id, price } = props.cosmatic;
  return (
    <div>
      <h1>Buy this: {name}</h1>
      <p>Only for: {price}</p>
    </div>
  );
};

export default Cosmatic;
