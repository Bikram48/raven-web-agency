import React from "react";
import "./testimonials.css";
import author from "../../assets/author.png";

export default function Testimonials() {
  return (
    <div className="raven__testimonial section__padding container">
      <div className="raven__testimonial-mobile-title">
        <h3>Testimonial</h3>
      </div>
      <div className="raven__testimonial-image">
        <img src={author} alt="" />
      </div>

      <div className="raven__testimonial-content">
        <div className="raven__testimonial-desktop_title">
          <h3>Testimonial</h3>
        </div>
        <p className="author">Jane Doe</p>
        <p className="job-title">Company / CEO</p>
        <p className="author__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
          fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
          egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
          ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id
          bibendum velit cras. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
          fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
          egestas.
        </p>
      </div>
    </div>
  );
}
