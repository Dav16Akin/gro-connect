import React from "react";
// import connectPng from "./../images/Web_capture_27-7-2023_02549_-removebg-preview.png";
import png1 from "./../images/Web_capture_27-7-2023_02528_-removebg-preview.png";
import png2 from "./../images/Web_capture_27-7-2023_0254_-removebg-preview.png";
import "./body.css";

const Body = () => {
  return (
    <div className="main-body-container">
      <div className="main-banner">
        <h1>Enabling Access to Digital Financial Services and Growth</h1>
        <button type="button">Contact Us</button>
      </div>

      <div className="info-section container">
        <div className="info-section-header">
          <h2>What we Offer</h2>
        </div>

        <div className="first-info">
          <div className="info-image">
            <img src={png2} alt="gro-life" />
            <button type="button">Learn More</button>
          </div>
          <div className="info-text">
            <h4>Business To Customer Platform (B2C)</h4>
            <p>
              Grolife is a Digital Financial Services Aggregation platform
              leveraging on one or more service provider
            </p>
            <ul>
              <li>Make Payments</li>
              <li>Pay Bills</li>
              <li>Recharge</li>
              <li>Invest</li>
              <li>Save</li>
              <li>Borrow</li>
            </ul>
          </div>
        </div>
        <div className="second-info">
          <div className="info-text">
            <h4>Business To Business Platform (B2B)</h4>
            <p>
              GroConnect is an Agent Services Aggregation platform leveraging on
              Gro Micro Services Management Platform
            </p>
            <ul>
              <li>Cash in & Cash out</li>
              <li>Transfer</li>
              <li>Pay Bills</li>
              <li>Recharge</li>
              <li>Withdraw</li>
              <li>Buy Digital gifts</li>
            </ul>
          </div>
          <div className="info-image">
            <img src={png1} alt="gro-connect" />
            <button type="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
