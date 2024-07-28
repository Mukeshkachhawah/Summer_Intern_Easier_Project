import React from "react";
import "./HeaderMain.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <>
      <div className="secondbar">
        <div className="b1">
          <Link to="/">
            <img
              src="https://themewagon.github.io/eiser/img/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="b2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/shop">Shop</Link>
              <ul className="dropdown-content">
                <li className="shop">
                  <Link to="/shopcategory">Shop Category</Link>
                </li>
                <li>
                  <Link to="/productdetail">Product Detail</Link>
                </li>
                <li>
                  <Link to="/productcheckout">Product Checkout</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/order-tracking">Tracking</Link>
            </li>
            <li>
              <Link to="/contact-page">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="b3">
          <Link to="#">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </Link>
          <Link to="#">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>
          <Link to="#">
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </Link>
          <Link to="/login-page">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
