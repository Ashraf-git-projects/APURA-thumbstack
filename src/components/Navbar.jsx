import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { IoChevronDown, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu automatically when leaving mobile width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="nav-logo">APURA</div>

      <nav className="nav-inner">
        <a href="#products">Products <span className="dropdown-arrow"><IoChevronDown /></span></a>
        <a href="#roadmap">Road map <span className="dropdown-arrow"><IoChevronDown /></span></a>
        <a href="#ourmission">Our mission</a>
        <a href="#devs">For devs</a>
        <a href="#contact">Contact us</a>
      </nav>

      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        <IoMenu />
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="#products">Products</a>
          <a href="#roadmap">Road map</a>
          <a href="#ourmission">Our mission</a>
          <a href="#devs">For devs</a>
          <a href="#contact">Contact us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
