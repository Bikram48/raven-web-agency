import React from "react";
import "./contact.css";
import { phone, email, address } from "./imports.js";

export default function Contact() {
  return (
    <div className="raven__contact section__padding container" id="contact">
      <div className="raven__contact-title text__center title__margin">
        <h3>Contact us</h3>
      </div>

      <div className="raven__contact-body">
        <div className="raven__contact-form">
          <div className="input__field">
            <label for="inputField">Name</label>
            <br />
            <input type="text" id="inputField" placeholder="Name here" />
          </div>
          <div className="input__field">
            <label for="inputField">Last name</label>
            <br />
            <input type="text" id="inputField" placeholder="Last name here" />
          </div>
          <div className="input__field">
            <label for="inputField">Email</label>
            <br />
            <input type="text" id="inputField" placeholder="Email here" />
          </div>
          <div className="input__field">
            <label for="inputField">Message</label>
            <br />
            <textarea
              type="text"
              id="inputField"
              placeholder="Name here"
            ></textarea>
          </div>
          <button>Send message</button>
        </div>
        <div className="raven__contact-info d-flex">
          <div className="raven__contact-info_mobile d-flex flex-space-between">
            <div className="header d-flex">
              <img src={phone} alt="" />
              <p>Mobile number</p>
            </div>

            <div className="numbers d-flex">
              <div className="number-1 d-flex">
                <p>+1 252-937-3762</p>
                <button>Call</button>
              </div>
              <div className="number-2 d-flex">
                <p>+1 252-937-3762</p>
                <button>Call</button>
              </div>
            </div>
          </div>

          <div className="raven__contact-info_email d-flex flex-space-between">
            <div className="header d-flex">
              <img src={email} alt="" />
              <p>E-mail</p>
            </div>
            <p class="raven__contact-info_value">sample@example.com</p>
          </div>
          <div className="raven__contact-info_address d-flex flex-space-between">
            <div className="header d-flex">
              <img src={address} alt="" />
              <p>Address</p>
            </div>
            <p class="raven__contact-info_value">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
