import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProductCart = ({ product }) => {
  console.log("Product:", product); // Log the product data
  return (
    <>
      <div className="b41">
        <div className="inner1">
          <Link to={`/product/${product.id}`}>
            <img src={product.productImg} alt={product.productName} />
          </Link>
          <div className="cart-info">
            <div className="circle">
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="circle">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="circle">
              <i className="fa-regular fa-thumbs-up"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="inner2">
          <p>{product.name}</p>
        </div>
        <div className="inner3">
          <div className="i1">${product.new_price}</div>
          {product.old_price && (
            <div className="i2">
              <del>${product.old_price}</del>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductCart;
