import React from "react";
import { ContactForm } from "../shared/ContactForm";
import "./contact.css";
import connectPng from "./../images/letsconnect.png";
import contactbanner from "./../images/5.png"

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-page-banner">
        <img src={contactbanner} alt="" />
      </div>
      <div className="contact-form-container">
        <div>
          <div>
            <img src={connectPng} alt="" />
          </div>
          <p></p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
