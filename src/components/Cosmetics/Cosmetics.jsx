import React from "react";
import { add, multiple } from "../../utilites/calculate";
import Cosmatic from "../Cosmatic/Cosmatic";

const Cosmetics = () => {
  const Cosmetics = [
    { id: 1, name: "Alta", price: 100 },
    { id: 2, name: "Palish", price: 200 },
    { id: 3, name: "Masish", price: 300 },
    { id: 4, name: "Balish", price: 400 },
    { id: 5, name: "Salish", price: 500 },
  ];
  return (
    <div>
      <h1>Welcome to my cosmatic shop</h1>
      {Cosmetics.map((cosmatic) => (
        <Cosmatic key={cosmatic.id} cosmatic={cosmatic} />
      ))}
    </div>
  );
};

export default Cosmetics;
