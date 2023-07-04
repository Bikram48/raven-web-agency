import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const links = [
  { label: "Home", url: "#home" },
  { label: "About", url: "#about" },
  { label: "Services", url: "#services" },
  { label: "Portfolio", url: "#portfolio" },
  { label: "Testimonials", url: "#testimonial" },
  { label: "News", url: "#news" },
  { label: "Contacts", url: "#contact" },
  { label: "Footer", url: "#footer" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="raven__navbar">
      <div className="raven__navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="raven__navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
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
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
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
