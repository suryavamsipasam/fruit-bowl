import React from "react";
import "./Mainpagestyles.css";
import b6 from "./b6.png"; // Replace with your image path

export default function Mainpage() {
    return (
        

      <div className="banner-container">

          <div className="banner-content">
            <div className="text-content">
              <p className="tagline"> Fresh Fruit Bowls </p>
              <h1 className="title"> Where wholesome meets mouthwatering .....</h1>
              <div className="title-container">
              <p className="title">  </p>
            </div> 
            </div> 
          </div>

          <div className="image-container">
            <img src={b6} alt="Fresh Fruits" className="fruit-image" />
          </div>

      </div>
    );
}
