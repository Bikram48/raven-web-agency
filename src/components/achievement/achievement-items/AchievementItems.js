import React from "react";
import "./achievementitem.css";

export default function AchievementItems({ number, text }) {
  return (
    <div className="raven__achievement-content">
      <div className="raven__achievement-content__number">
        <p>{number}</p>
      </div>
      <div className="raven__achievement-content__text">
        <p>{text}</p>
      </div>
    </div>
  );
}
