import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="topbarleft">
            <p>PHONE: +01 256 25 235</p>
            <p>|</p>
            <p>EMAIL: INFO@EISER.COM</p>
          </div>
          <div className="topbarright">
            <ul>
              <li>Gift card</li>
              <li>|</li>
              <li>Track Order</li>
              <li>|</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
