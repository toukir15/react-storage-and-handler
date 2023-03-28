import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, id, price } = props.cosmetic;
  const handleAddToCart = (id) => {
    console.log("cart added", id);
  };
  return (
    <div className="product">
      <h3>Buy this: {name}</h3>
      <p>It has ID: {id}</p>
      <button onClick={() => handleAddToCart(id)}>Add To Cart</button>
    </div>
  );
};

export default Cosmetic;
