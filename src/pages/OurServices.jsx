import React from "react";
import servicebanner from "./../images/7.png";
import "./ourservices.css";

const OurServices = () => {
  return (
    <div className="service-main-container">
      <div className="service-banner">
        <img src={servicebanner} alt="" />
        <h1>Our Services</h1>
      </div>
      <div className="servives-container">
        <div className="services-side-text">
          Through innovation in services and solutions delivery, GRO will
          bringmillions of  Nigerians to the mainstream economy.
        </div>
        <div className="line"></div>
        <div className="services">
          <div className="service-box">
            <div></div>
            <h1>Terminal Services</h1>
            <ul>
              <li>In-Person Payments</li>
              <li>Vending Services</li>
              <li>Agent Management Services</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Payments</h1>
            <ul>
              <li>Online Payments</li>
              <li>Offline Payments</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Platforms</h1>
            <ul>
              <li>Trade Platforms</li>
              <li>Inventory Management Systems </li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Billing</h1>
            <ul>
              <li>Subscription Management</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Revenue Assurance</h1>
            <ul>
              <li>Tax, Bills, Revenues Etc. Services</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Capital</h1>
            <ul>
              <li>Business Financing</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Treasury</h1>
            <ul>
              <li>Banking As A Service</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Identity</h1>
            <ul>
              <li>Digital and Biometric Identity Management</li>
              <li>Man Present Solutions</li>
            </ul>
          </div>
          <div className="service-box">
            <div></div>
            <h1>Financial</h1>
            <ul>
              <li>Linked Digital Financial Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
