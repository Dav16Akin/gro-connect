import React from "react";
import "./header.css";
import logo from "./../images/GroConnect.png";

const Header = () => {
  return (
    <div className="navbar navbar-top d-flex fixed-top">
      <div className="logo">
        <img alt="logo" src={logo}></img>
      </div>
      <div className="nav-links">
        <ul className="navbar-links">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="*">
              Bank Accounts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">
              Mobile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">
              Cash Deposits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">
              Card Issuance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">
              More
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="*">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
