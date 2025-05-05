import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Home.scss"; // Import styles for the Home page
import ProfilePic from "../assets/images/ProfilePic.png";

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <h1>Welcome to My Photography Portfolio</h1>
              <p>Capturing moments that last a lifetime.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="about-image-col">
              <div className="about-image-wrapper">
                <div className="about-image-bg"></div>
                <img 
                  src={ProfilePic} 
                  alt="Photographer Profile" 
                  className="about-image"
                />
              </div>
            </Col>
            <Col lg={6} className="about-content">
              <h2>About Me</h2>
              <p className="lead">
                I am a passionate photographer specializing in capturing the beauty of
                life through my lens.
              </p>
              <p>
                With over 5 years of experience, I bring stories to life through my unique 
                perspective and artistic vision. My work spans from intimate portraits to 
                breathtaking landscapes, each image telling its own compelling story.
              </p>
              <p>
                I believe that photography is more than just taking pictures – it's about 
                capturing emotions, preserving memories, and creating art that resonates 
                with people's hearts.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2>My Portfolio</h2>
              <p>Explore some of my favorite works below.</p>
            </Col>
          </Row>
          <Row className="portfolio-gallery">
            {/* Portfolio items will be added here */}
            <Col xs={12} md={6} lg={4}>
              <div className="portfolio-item">
                {/* Add portfolio item content */}
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="portfolio-item">
                {/* Add portfolio item content */}
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="portfolio-item">
                {/* Add portfolio item content */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <h2>Services</h2>
              <p>
                I offer a variety of photography services tailored to your needs:
              </p>
              <Row className="mt-4">
                <Col xs={12} md={4}>
                  <div className="service-item">
                    <h3>Weddings</h3>
                    <p>Capturing your special day with elegance and style.</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="service-item">
                    <h3>Portraits</h3>
                    <p>Professional portraits that tell your story.</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="service-item">
                    <h3>Events</h3>
                    <p>Documenting your events with precision and creativity.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <h2>Contact Me</h2>
              <p>Have a project in mind? Let's work together!</p>
              <button className="btn btn-dark btn-lg">Get in Touch</button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
