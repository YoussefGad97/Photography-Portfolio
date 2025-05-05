import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="footer-brand">
            <h3>Photography Portfolio</h3>
            <p>Capturing moments that last a lifetime.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>

          <Col lg={4} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col lg={4} className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>contact@photography.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Photography Street, City, Country</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12}>
            <div className="copyright">
              <p>&copy; {currentYear} Photography Portfolio. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
