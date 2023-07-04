import React from "react";
import AchievementItems from "./achievement-items/AchievementItems";
import "./achievement.css";

export default function Achievement() {
  return (
    <div className="raven__achievement section__padding">
      <div className="raven__achievement-container container">
        <AchievementItems number="840" text="Clients" />
        <AchievementItems number="9854" text="Projects" />
        <AchievementItems number="321" text="Active Clients" />
        <AchievementItems number="5410" text="Cups of Coffee" />
        <AchievementItems number="3000" text="Reviews" />
      </div>
    </div>
  );
}
