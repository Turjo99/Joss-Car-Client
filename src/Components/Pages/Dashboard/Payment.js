import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Checkout from "./Checkout";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  const { price, product, name, email, _id, productID } = data[0];
  console.log(productID);
  const stripePromise = loadStripe(
    `pk_test_51M6PqYC7ChjMGzPDxhKymmYLy7a3ETzYI4sYS9zBr3ZvTQGQnjrrkdoj8iz0vhTdzMtWxPlfAFZA9WR2zrHnNAWR00DtBHQuL6`
  );

  return (
    <div>
      <h3 className="text-3xl text-center">
        Payment for <span className=" font-bold">{product}</span>
      </h3>
      <p className="text-center my-5 text-xl">
        Please Pay Taka
        <span className=" font-bold text-3xl"> {price} Lacs</span> For proceed
      </p>
      <div className="">
        <Elements stripe={stripePromise}>
          <Checkout
            price={price}
            name={name}
            email={email}
            _id={_id}
            productID={productID}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
