import React from "react";
import solutionimg from "./../images/8.png";
import "./oursolutions.css";

const OurSolutions = () => {
  return (
    <>
      <div className="solution-main-container">
        <div className="solutions-text">
          <h1>Our Solutions</h1>
          <p>
            GRO was founded on the idea that a global knowledge and trade
            exchange platform was key to expanding and improving financial
            inclusion in Nigeria. With the support from patrons and partners we
            have invested deeply in these platforms to deliver tangible results to
            our clients and stakeholders through innovative solutions in the
            following areas.
          </p>
        </div>
        <div className="line"></div>
        <div className="solution-banner">
          <img src={solutionimg} alt="" />
        </div>
      </div>

      <div className="solutions-container">
        <div className="solutions">
          <div className="boxx">
            <h1>Digital Market Places</h1>
          </div>
          <div className="boxx">
            <h1>Embedded Financial Services</h1>
          </div>
          <div className="boxx">
            <h1>Platforms</h1>
          </div>
          <div className="boxx">
            <h1>Global Business Connections</h1>
          </div>
          <div className="boxx">
            <h1>Professional Services</h1>
          </div>
          <div className="boxx">
            <h1>eCommerce</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
