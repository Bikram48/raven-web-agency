import React from "react";
import "./servicecard.css";

export default function ServiceCard({ title, description, contact, image }) {
  return (
    <div className="raven__service-card_content card">
      <div className="raven__service-card_content-title">
        <h3>{title}</h3>
      </div>

      <div className="raven__service-card_content-info">
        <p>{description}</p>
        <p>{contact}</p>
      </div>

      <div className="raven__service-card_content-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
