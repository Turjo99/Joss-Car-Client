import React from "react";
import AdvertisedProduct from "./AdvertisedProduct";
import Hero from "./Hero";
import ProductCategory from "./ProductCategory";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AdvertisedProduct></AdvertisedProduct>
      <ProductCategory></ProductCategory>
    </div>
  );
};

export default Home;
