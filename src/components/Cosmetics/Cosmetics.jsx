import React, { useEffect, useState } from "react";
// import { add, multiple } from "../../utilites/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  console.log(cosmetics);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div>
      <h1>Welcome to my cosmetic shop</h1>
      {cosmetics.map((cosmetic) => console.log(cosmetic))}

      {/* {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />
      ))} */}
    </div>
    console.log(object);
  );
};

export default Cosmetics;
