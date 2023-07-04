import React from "react";
import "./portfolio.css";
import { setup, netflix, tiktok, tablet, laptop } from "./imports.js";
import PortfolioItem from "./items/PortfolioItem";

export default function Portfolio() {
  return (
    <div className="raven__portfolio container section__padding">
      <div className="raven__porfolio-title title__margin">
        <h3>Our Works</h3>
      </div>

      <div className="raven__portfolio-content">
        <PortfolioItem image={setup} />
        <PortfolioItem image={netflix} />
        <PortfolioItem image={tiktok} />
        <PortfolioItem message="Not Impressed" />
        <PortfolioItem image={tablet} />
        <PortfolioItem image={laptop} />
      </div>
    </div>
  );
}
