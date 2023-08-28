import React from "react";
import { ContactForm } from "../shared/ContactForm";
import "./contact.css";
import connectPng from "./../images/coonect.png";


const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-form-container">
        <div>
          <div className="contact-banner">
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
