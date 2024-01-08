import React from "react";
import "./css/Hero.css";

function Hero(props) {
  return (
    <div className="hero bg-light">
      <div className="container text-center py-5">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
