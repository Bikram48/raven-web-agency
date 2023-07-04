import React from "react";
import "./item.css";

export default function PortfolioItem({ image, message }) {
  return (
    <>
      {message ? (
        <div className="raven__portfolio-content_message">
          <h3>Not Impressed?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>See more</button>
        </div>
      ) : (
        <div className="raven__portfolio-content_image">
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
}
