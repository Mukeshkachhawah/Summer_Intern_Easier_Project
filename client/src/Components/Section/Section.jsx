import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <>
      <div className="box1">
        <div className="box1a">
          <h2>{props.title}</h2>
          <h4>Very us move be blessed multiply night</h4>
        </div>
        <div className="box1b">
          <span>{props.pagePath}</span>
        </div>
      </div>
      <div class="box2" id="x1"></div>
    </>
  );
};

export default Section;
