// This line imports React and two hooks, useEffect and useState, from the React library.
import React, { useEffect, useState } from "react";

import "./ProductCategory.css";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

const ProductCategory = () => {
  //This defines a functional component called ProductCategory.

  const [products, setProducts] = useState([]);
  // State to store the products  This creates a state variable products (initially an empty array) and a function setProducts to update it.

  const [error, setError] = useState(null);
  // State to store any errors
  //  This creates a state variable error (initially null) and a function setError to update it.

  const url = "http://localhost:8000/products/random";
  //This stores the API URL in a variable url.

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
    <div className="container">
      <div className="leftbox">
        <div className="leftb1">
          <div className="title">
            <h2>Browse Category</h2>
          </div>
          <div className="option">
            <input type="radio" id="option1" name="option" value="option1" />
            <label htmlFor="option1"> Frozen Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option2" name="option" value="option2" />
            <label htmlFor="option2"> Dried Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option3" name="option" value="option3" />
            <label htmlFor="option3"> Fresh Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option4" name="option" value="option4" />
            <label htmlFor="option4"> Meat Alternatives</label>
          </div>
          <div className="option">
            <input type="radio" id="option5" name="option" value="option5" />
            <label htmlFor="option5"> Meat</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Product Brand</h2>
          </div>
          <div className="option">
            <input type="radio" id="brand1" name="brand" value="brand1" />
            <label htmlFor="brand1"> Apple</label>
          </div>
          <div className="option">
            <input type="radio" id="brand2" name="brand" value="brand2" />
            <label htmlFor="brand2"> Asus</label>
          </div>
          <div className="option">
            <input type="radio" id="brand3" name="brand" value="brand3" />
            <label htmlFor="brand3"> Gionee</label>
          </div>
          <div className="option">
            <input type="radio" id="brand4" name="brand" value="brand4" />
            <label htmlFor="brand4"> Micromax</label>
          </div>
          <div className="option">
            <input type="radio" id="brand5" name="brand" value="brand5" />
            <label htmlFor="brand5"> Samsung</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Color Filter</h2>
          </div>
          <div className="option">
            <input type="radio" id="color1" name="color" value="color1" />
            <label htmlFor="color1"> Black</label>
          </div>
          <div className="option">
            <input type="radio" id="color2" name="color" value="color2" />
            <label htmlFor="color2"> Black Leather</label>
          </div>
          <div className="option">
            <input type="radio" id="color3" name="color" value="color3" />
            <label htmlFor="color3"> Black with Red</label>
          </div>
          <div className="option">
            <input type="radio" id="color4" name="color" value="color4" />
            <label htmlFor="color4"> Gold</label>
          </div>
          <div className="option">
            <input type="radio" id="color5" name="color" value="color5" />
            <label htmlFor="color5"> Spacegray</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Price Filter</h2>
          </div>
          <label htmlFor="rangeInput"> Price</label>
          <input
            type="range"
            id="rangeInput"
            min="0"
            max="100"
            defaultValue="50"
            onInput={(e) => updateValueDisplay(e.target.value)}
          />
          <div id="valueDisplay">50</div>
        </div>
      </div>
      <div className="rightbox">
        <div className="box3">
          <div className="default">
            <select className="default1" id="" name="">
              <option value="Default Sorting">Default Sorting</option>
              <option value="Default Sorting 01">Default Sorting 01</option>
              <option value="Default Sorting 02">Default Sorting 02</option>
            </select>
          </div>
          <div className="default">
            <select className="sort12" id="" name="">
              <option value="sort12">sort 12</option>
              <option value="sort14">sort 14</option>
              <option value="sort16">sort 16</option>
            </select>
          </div>
          <div className="show12"></div>
        </div>
        <div className="box4">
          {error && <div className="error">{error}</div>}
          {products.map((item, index) => (
            <SingleProductCart key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
