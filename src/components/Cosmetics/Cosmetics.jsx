import React from "react";
import { add, multiple } from "../../utilites/calculate";

const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);
  const multiTotal = multiple(first, second);
  return (
    <div>
      <h1>Welcome to my cosmetics shop</h1>
      <p>Total Price: {total}</p>
      <p>Multiple : {multiTotal}</p>
    </div>
  );
};

export default Cosmetics;
