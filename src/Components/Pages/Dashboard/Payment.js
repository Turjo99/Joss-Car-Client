import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  const { price, product } = data[0];
  console.log(price);
  return (
    <div>
      <h3 className="text-3xl text-center">
        Payment for <span className=" font-bold">{product}</span>
      </h3>
      <p className="text-center my-5 text-xl">
        Please Pay Taka
        <span className=" font-bold text-3xl"> {price} Lacs</span> For proceed
      </p>
    </div>
  );
};

export default Payment;
