import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card2" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <p>{heading}</p>
      <p>{detail}</p>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
