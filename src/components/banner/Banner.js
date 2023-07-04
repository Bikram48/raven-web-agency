import React from "react";
import BannerImg from "../../assets/cherrydeck.jpeg";
import "./banner.css";

export default function Banner() {
  return (
    <div className="raven__banner" id="about">
      <div className="raven__banner-content">
        <div className="raven__banner-content_title">
          <h1>
            WE ARE <br></br>DIGITAL AGENCY
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
          fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
          egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
          ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id
          bibendum velit cras.{" "}
        </p>
        <div className="raven__banner-content_btn">
          <button type="button">Learn more</button>
        </div>
      </div>

      <div className="raven__banner-image">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
}
