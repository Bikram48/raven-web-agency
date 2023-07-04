import React from "react";
import "./member.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function TeamMember({ image, type }) {
  return (
    <>
      {type ? (
        <div className="raven__team-ceo_description">
          <h4 className="name">Jane Doe</h4>
          <p className="position">Company/CEO</p>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eius
            id molestias autem, consequatur nulla voluptatibus architecto
            temporibus error quis?
          </p>

          <div className="social__icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      ) : (
        <div className="raven__team-image">
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
}
