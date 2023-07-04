import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="raven__footer container section__padding d-flex">
      <div className="raver__footer-logo">
        <img src={logo} alt="" />
      </div>
      <p className="raven__footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
        fringilla turpis tempor enim. Vel tristique suspendisse
      </p>
      <div className="raven__footer-links d-flex">
        <li>
          <a href="">Website development</a>
        </li>
        <li>
          <a href="">Branding</a>
        </li>
        <li>
          <a href="">UI/UX design</a>
        </li>
        <li>
          <a href="">Software</a>
        </li>
        <li>
          <a href="">Digital marketing</a>
        </li>
      </div>

      <div className="raven__footer-social_icons d-flex">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <p className="raven__foter-copyright_message">
        Copyright © 2021. Raven Digital. All rights reserved.
      </p>
    </div>
  );
}
