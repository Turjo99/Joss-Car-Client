import React from "react";
import AdvertisedProduct from "./AdvertisedProduct";
import Feature from "./Feature";
import Hero from "./Hero";
import ProductCategory from "./ProductCategory";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AdvertisedProduct></AdvertisedProduct>
      <ProductCategory></ProductCategory>
      <Feature></Feature>
    </div>
  );
};

export default Home;
