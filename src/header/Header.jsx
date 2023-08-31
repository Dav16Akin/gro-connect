import React from "react";
import "./header.css";
import logo from "./../images/GROLOGO.png";

const Header = () => {
  return (
    <div className="navbar navbar-top">
      <div className="logo" href="/">
        <a href="/">
          <img alt="logo" src={logo}></img>
        </a>
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
                <a class="dropdown-item" href="/contact">
                  GroConnect
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  Tradex
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
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
                <a class="dropdown-item" href="/contact">
                  ACES
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
              Market Places
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/contact">
                  NairaMarket
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  GroMarket
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
              Revenue Assurance
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/contact">
                  IGRPay
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  PayCollect
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
              Payment Services
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/contact">
                  GroPay
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  INNSTAPay
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
              Logistics
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/contact">
                  DILIVA
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  Buy4Me
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-item dropstart">
        <span className="material-symbols-outlined nav-link "
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">Info</span>
        <ul class="dropdown-menu ">
          <li>
            <a class="dropdown-item" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/services">
              Our Servives
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/solutions">
              Our Solutions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
