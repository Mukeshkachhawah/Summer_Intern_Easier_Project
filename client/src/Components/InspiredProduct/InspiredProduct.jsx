import React, { useEffect, useState } from "react";
import "./InspiredProduct.css";
import SingleProductCart from "../SingleProductCart/SingleProductCart";
const InspiredProduct = () => {
  //This defines a functional component called ProductCategory.

  const [products, setProducts] = useState([]);
  // State to store the products  This creates a state variable products (initially an empty array) and a function setProducts to update it.

  const [error, setError] = useState(null);
  // State to store any errors
  //  This creates a state variable error (initially null) and a function setError to update it.
  const url = "http://localhost:8000/products/random_8";
  //This stores the API URL in a variable url._

  useEffect(() => {
    //This hook runs the code inside it after the component mounts and whenever the url changes.
    const fetchData = async (url) => {
      //This defines an asynchronous function to fetch data from the API.
      try {
        const response = await fetch(url); // This makes a request to the API and waits for the response.

        if (!response.ok) {
          //This checks if the response is not OK (status code is not 2xx). If so, it throws an error.
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // This converts the response to JSON format.

        setProducts(data); //This updates the products state with the fetched data.
      } catch (error) {
        //If there's an error during the fetch, this catches it and updates the error state with the error message.
        setError(error.message);
      }
    };
    fetchData(url);
  }, [url]);

  console.log(products); //his logs the products to the console for debugging purposes.

  const updateValueDisplay = (value) => {
    document.getElementById("valueDisplay").innerText = value;
  };

  return (
    <>
      <div className="inspired-products">
        <div className="container">
          <div className="section-title">
            <h2>Inspired Products</h2>
          </div>
          <br /> <div className="divider"></div>
          <br />{" "}
          <div className="statement">
            <p>Bring called seed first of third give itself now ment</p>
          </div>
          <br/>
          <div className="inspired-products-grid">
            {error && <div className="error">{error}</div>}
            {products.map((item, index) => (
              <SingleProductCart key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InspiredProduct;
