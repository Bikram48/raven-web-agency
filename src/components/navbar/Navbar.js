import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="raven__navbar">
      <div className="raven__navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="raven__navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Elements</a>
        </li>
        <li>
          <a href="#">
            <FaSearch />
          </a>
        </li>
      </div>

      <div className="raven__navbar-mobile_links">
        <div className="raven__navbar-mobile_toggle">
          {toggle ? (
            <RiCloseLine onClick={() => setToggle(false)} />
          ) : (
            <RiMenu3Line onClick={() => setToggle(true)} />
          )}

          <div className="raven__navbar-mobile_toggle-links">
            {toggle && (
              <>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Elements</a>
                </li>
                <li>
                  <a href="#">
                    <FaSearch />
                  </a>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
