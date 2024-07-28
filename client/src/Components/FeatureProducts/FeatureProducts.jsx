import React, { useEffect, useState } from "react";
import "./FeatureProducts.css";
import SingleProductCart from "../SingleProductCart/SingleProductCart";
import useFetch from "../../Hooks/FetchApiHook";
const FeatureProducts = () => {
  const url = "http://localhost:8000/products/random_3";

  const { data, error } = useFetch(url);
  console.log(data); //his logs the products to the console for debugging purposes.

  const updateValueDisplay = (value) => {
    document.getElementById("valueDisplay").innerText = value;
  };
  return (
    <>
      <div className="featured-products">
        <h2>FEATURED PRODUCT</h2>
        <hr />
        <p className="subtitle">
          Bring called seed first of third give itself now ment
        </p>
        <div className="products">
          {error && <div className="error">{error}</div>}
          {data.map((item, index) => (
            <SingleProductCart key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
