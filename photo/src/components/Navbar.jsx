import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss"; // Import custom styles
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow to the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      variant={scrolled ? "dark" : "light"}
      bg={scrolled ? "dark" : "transparent"}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand">
          Photography Portfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link">Portfolio</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
