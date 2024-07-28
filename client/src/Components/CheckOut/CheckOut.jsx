import React from "react";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <>
      <div className="main">
        <div className="l1">Returning Customer?click here to login</div>
        <br />
        <div className="l2">
          <p>
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
          <br />
          <input
            type="email"
            id="email"
            className="email"
            placeholder="Username or email"
            required
          />
          <input
            type="password"
            id="password"
            className="password"
            placeholder="password"
            required
          />
          <br />
          <br />
          <button type="submit" id="submit">
            Send Messages
          </button>
          <input type="checkbox" id="checkbox" />
          Remember me
          <br />
          <br />
          <p>Lost your password?</p>
          <br />
          <br />
        </div>
        <div className="l11">Have a coupon? Click here to enter your code</div>
        <br />
        <div className="l2">
          <input
            type="text"
            id="coupon"
            placeholder="Enter coupon code"
            required
          />
          <br />
          <br />
          <button type="submit" id="submit">
            Apply coupon
          </button>
          <br />
          <br />
        </div>
        <div className="main2">
          <div className="col1">
            <h3>Billing Details</h3>
            <input type="text" id="first" placeholder="First name" required />
            <br />
            <input type="text" id="last" placeholder="Last name" required />
            <br />
            <br />
            <input
              type="text"
              id="company"
              placeholder="Company name"
              required
            />
            <br />
            <br />
            <select className="" id="company" name="country">
              <option value="country">India</option>
              <option value="country">Australia</option>
              <option value="country">America</option>
            </select>
            <br />
            <br />
            <input
              type="text"
              id="company"
              placeholder="Addressline 01"
              required
            />
            <br />
            <br />
            <input
              type="text"
              id="company"
              placeholder="Address line 02"
              required
            />
            <br />
            <br />
            <input type="text" id="company" placeholder="Town/city" required />
            <br />
            <br />
            <select className="" id="company" name="district">
              <option value="district">Jodhpur</option>
              <option value="district">Jaipur</option>
              <option value="district">Kota</option>
            </select>
            <br />
            <br />
            <input
              type="text"
              id="company"
              placeholder="postcode/Zip"
              required
            />
            <br />
            <br />
            <input type="checkbox" id="checkbox" />
            create an Account?
            <br />
            <br />
            <h3>shipping Details</h3>
            <br />
            <input type="checkbox" id="checkbox" />
            ship to an different address?
            <label htmlFor="textbox"></label>
            <br />
            <br />
            <br />
            <input
              type="text"
              id="textbox"
              name="textbox"
              placeholder="                                           Order notes"
            />
            <br />
            <br />
          </div>
          <div className="col2">
            <h2>Your Order</h2>
            <div className="product">
              <span>Product</span>
              <span>total</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
