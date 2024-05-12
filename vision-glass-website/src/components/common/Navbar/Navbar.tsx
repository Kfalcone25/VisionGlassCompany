import React from "react";
import styles from "../../../assets/styles/base/Navbar.module.css";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="logo" alt="Vision Glass Logo" />
        <span className="navbar-company">Vision Glass</span>
      </div>

      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>

        <li className="dropdown">
          <a href="/residential">Residential</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Showers</a>
            </li>
            <li>
              <a href="#">Windows</a>
            </li>
            <li>
              <a href="#">Table Tops</a>
            </li>
            <li>
              <a href="#">Custom Glass</a>
            </li>
            <li>
              <a href="#">Mirrors</a>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="/commercial">Commercial</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Storefronts</a>
            </li>
            <li>
              <a href="#">Curtain Walls</a>
            </li>
            <li>
              <a href="#">Entrance Systems</a>
            </li>
            <li>
              <a href="#">Custom Glazing</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
