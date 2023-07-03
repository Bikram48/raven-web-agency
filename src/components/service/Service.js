import React from "react";
import ServiceCard from "./service-card/ServiceCard";
import "./service.css";
import { computer, tab, rectangle, diamond, bar, paint } from "./imports.js";

export default function Service() {
  return (
    <div className="raven__service container section__padding">
      <div className="raven__service-title">
        <h3>What we do</h3>
      </div>

      <div className="raven__service-cards">
        <ServiceCard
          title="App Development"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={computer}
        />
        <ServiceCard
          title="Website Development"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={tab}
        />
        <ServiceCard
          title="UI/UX Designing"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={rectangle}
        />
        <ServiceCard
          title="Digital Marketing"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={diamond}
        />
        <ServiceCard
          title="SEO & Content Writing"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={bar}
        />
        <ServiceCard
          title="Graphic Designing"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          contact="Contact Us"
          image={paint}
        />

        <div className="raven__service-separate_card">
          <div className="raven__service-separate_card-title">
            <h2>Solution for your business</h2>
          </div>

          <div className="raven__service-separate_card_content-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>

          <div className="raven__service-separate_card-btn">
            <button type="button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
