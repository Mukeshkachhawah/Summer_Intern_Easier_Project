import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f1">
          <div className="f2">
            <h3>Top products</h3>
            <br />
            <p>Managed Website</p>
            <p>Managed Reputations</p>
            <p>Power Tools</p>
            <p>Marketing Services</p>
          </div>  
          <div className="f2">     
            <h3>Quick links</h3>
            <br />
            <p>jobs</p>
            <p>Brand assets</p>
            <p>investor relations</p>
            <p>terms of Services</p>
          </div>
          <div className="f2">
            <h3>Features</h3>
            <br />
            <p>jobs</p>
            <p>Brand assets</p>
            <p>investor relations</p>
            <p>terms of Services</p>
          </div>
          <div className="f2">
            <h3>Resources</h3>
            <br />
            <p>Guides</p>
            <p>Research</p>
            <p>Agencies</p>
            <p>Experts</p>
          </div>
          <div className="f2">
            <h3>Newsletter</h3>
            <p>You can trust us. we only send promo offers</p>
            <br />
            <br />
            <div className="y1">
              <input type="email" id="email" name="email" required />
            </div>
            <div className="y2">Subscribe</div>
          </div>
        </div>
        <div className="z1">
          <div className="z11">
            <p style={{ color: "white" }}>
              Copyright ©2024 All rights reserved | This template is made with
              <i className="fa-regular fa-heart"></i> by Colorlib
            </p>
          </div>
          <div className="z12">
            <div className="z13">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="z13">
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </div>
            <div className="z13">
              <span>
                <i className="fa-brands fa-whatsapp"></i>
              </span>
            </div>
            <div className="z13">
              <span>
                <i className="fa-brands fa-google"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
