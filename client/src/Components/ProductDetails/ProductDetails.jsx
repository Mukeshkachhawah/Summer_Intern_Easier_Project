import React from "react";
import "./ProductDetails.css";
const ProductDetail = () => {
  return (
    <>
      <div className="main">
        <div className="main1">
          <div className="main11">
            <img
              src="https://themewagon.github.io/eiser/img/product/single-product/s-product-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="main1">
          <div className="innermain1">
            <h2>Faded SkyBlu Denim Jeans</h2>
            <br />
            <h2 style={{ color: "lightgreen" }}>$149.99</h2>
            <br />
            <div className="innermain2">
              <div className="innermain22">
                <p>Category</p>
                <br />
                <p>Availibility</p>
                <br />
                <div className="innermain23">
                  <p>:Household</p>
                  <br />
                  <p>:In stock</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="line1">
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <br />
              <br />
              <br />
            </div>
            <div className="quantity">
              <label htmlFor="quantity" style={{ color: "rgb(58, 57, 57)" }}>
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="100"
                value="1"
              />
              <br />
              <br />
              <br />
            </div>
            <div className="cart">
              <div className="s1">
                <button type="submit">Add to Cart</button>
              </div>
              <div className="s2">
                <i className="fa-solid fa-diamond"></i>
              </div>
              <div className="s2">
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
