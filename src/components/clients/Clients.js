import React from "react";
import "./clients.css";
import { mango, microsoft, nike, amazon } from "./imports";

export default function Clients() {
  return (
    <div className="raven__clients section__padding container">
      <div className="raven__clients-title title__margin">
        <h3>Clients</h3>
      </div>
      <div className="raven__clients-images">
        <div>
          <img src={mango} alt="mango" />
        </div>
        <div>
          <img src={microsoft} alt="microsoft" />
        </div>
        <div>
          <img src={nike} alt="nike" />
        </div>
        <div>
          <img src={amazon} alt="dropbox" />
        </div>
        <div>
          <img src={mango} alt="mango" />
        </div>
        <div>
          <img src={microsoft} alt="microsoft" />
        </div>
        <div>
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
}
