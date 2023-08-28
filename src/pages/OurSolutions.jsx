import React from "react";
import solutionimg from "./../images/8.png";
import "./oursolutions.css";

const OurSolutions = () => {
  return (
    <div className="solution-main-container">
      <div className="solution-banner">
        <img src={solutionimg} alt="" />
        <h1>Our Solutions</h1>
      </div>
      <div className="solutions-text">
        <p>
          GRO was founded on the idea that a global knowledge and trade exchange
          platform was key to expanding and improving financial inclusion in
          Nigeria. With the support from patrons and partners we have invested
          deeply in this platform to deliver tangible results to our clients and
          stakeholders through innovative solutions in the following areas.
        </p>
        <ul>
            <li>Digital Market Places</li>
            <li>Embedded Financial Services</li>
            <li>Platforms</li>
            <li>Global Business Connections</li>
            <li>Professional Services</li>
            <li>eCommerce</li>
        </ul>
      </div>
    </div>
  );
};

export default OurSolutions;
