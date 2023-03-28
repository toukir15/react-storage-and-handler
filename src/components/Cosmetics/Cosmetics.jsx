import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
// import { add, multiple } from "../../utilites/calculate";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div>
      <h1>Welcome to my cosmetic shop</h1>
      {cosmetics.map((cosmetic) => console.log(cosmetic))}

      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />
      ))}
    </div>
  );
};

export default Cosmetics;
