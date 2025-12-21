import React from "react";
import "./Navbar.css";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="navbar">
  <div className="nav-logo">APURA</div>

  <nav className="nav-inner">
   <a href="#products">Products <span className="dropdown-arrow"><IoChevronDown/> </span></a>
      <a href="#roadmap">Road map <span className="dropdown-arrow"><IoChevronDown/> </span></a>
      <a href="#ourmission">Our mission</a>
      <a href="#devs">For devs</a>
      <a href="#contact">Contact us</a>
  </nav>
</header>

  );
};

export default Navbar;

{/* 
  <div className="nav-inner">
    <div className="nav-logo">APURA</div>

    <nav className="nav-links">
      <a href="#products">Products</a>
      <a href="#roadmap">Road map</a>
      <a href="#ourmission">Our mission</a>
      <a href="#devs">For devs</a>
      <a href="#contact">Contact us</a>
    </nav>

    <div className="nav-empty"></div>
  </div>
</header> */}

