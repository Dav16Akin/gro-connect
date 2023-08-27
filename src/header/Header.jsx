import React from "react";
import "./header.css";
import logo from "./../images/GROLOGO.png";

const Header = () => {
  return (
    <div className="navbar navbar-top d-flex fixed-top">
      <div className="logo">
        <img alt="logo" src={logo}></img>
      </div>
      <div className="nav-links">
        <ul className="navbar-links">
          <li className="nav-item dropdown">
            <a
              className="nav-link  dropdown-toggle"
              href="*"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Digital Financial Services
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*">
                  GroConnect
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*">
                  Tradex
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*">
                  GroWorld
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="*"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Empowerment
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*" >
                  ACES
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  href="*" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Market Places
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*" >
                  NairaMarket
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*" >
                  GroMarket
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*" >
                  Buy4Me
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  href="*" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Revenue Assurance
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*" >
                  IGRPay
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*" >
                  PayCollect
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  href="*" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Payment Services
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*" >
                  GroPay
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="*" >
                  INNSTAPay
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  href="*" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Logistics
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="*" >
                  DILIVA
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="*" >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
