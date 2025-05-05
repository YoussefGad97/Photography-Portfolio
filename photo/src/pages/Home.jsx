import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Home.scss"; // Import styles for the Home page
import ProfilePic from "../assets/images/ProfilePic.png";

// Import your portfolio images
import Portfolio1 from "../assets/images/Portfolio1.jpg";
import Portfolio2 from "../assets/images/Portfolio2.jpg";
import Portfolio3 from "../assets/images/Portfolio4.jpeg";
import Portfolio4 from "../assets/images/Portfolio3.jpg";

const Home = () => {
  const portfolioItems = [
    {
      image: Portfolio1,
      title: "Portrait Photography",
      description: "Capturing the essence of personality through intimate portraits that tell unique stories.",
      category: "Portraits"
    },
    {
      image: Portfolio2,
      title: "Landscape Photography",
      description: "Exploring the beauty of nature and urban landscapes through a creative lens.",
      category: "Landscapes"
    },
    {
      image: Portfolio3,
      title: "Wedding Photography",
      description: "Documenting love stories and special moments that last a lifetime.",
      category: "Weddings"
    },
    {
      image: Portfolio4,
      title: "Event Photography",
      description: "Capturing the energy and excitement of special events and celebrations.",
      category: "Events"
    }
  ];

  const services = [
    {
      title: "Photography",
      icon: "📸",
      description: "Professional photography services for weddings, portraits, events, and commercial projects. Capturing moments that tell your story.",
      features: [
        "Wedding Photography",
        "Portrait Sessions",
        "Event Coverage",
        "Commercial Shoots"
      ]
    },
    {
      title: "Videography",
      icon: "🎥",
      description: "High-quality video production services for weddings, events, and promotional content. Creating cinematic experiences that last forever.",
      features: [
        "Wedding Films",
        "Event Videos",
        "Promotional Content",
        "Social Media Videos"
      ]
    },
    {
      title: "Editing",
      icon: "✂️",
      description: "Professional photo and video editing services to enhance your content and bring your vision to life with precision and creativity.",
      features: [
        "Photo Retouching",
        "Color Grading",
        "Video Editing",
        "Special Effects"
      ]
    }
  ];

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
          <Row>
            <Col xs={12}>
              <div className="portfolio-carousel-wrapper">
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  stopOnHover={true}
                  className="portfolio-carousel"
                >
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="carousel-slide">
                      <div className="carousel-content">
                        <div className="text-card">
                          <span className="category">{item.category}</span>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
              <h2>Services</h2>
              <p className="services-intro">
                Comprehensive visual storytelling services to bring your vision to life
              </p>
            </Col>
          </Row>
          <Row className="services-grid">
            {services.map((service, index) => (
              <Col key={index} xs={12} md={4} className="mb-4">
                <div className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
              <h2>Let's Create Something Amazing Together</h2>
              <p>
                Whether you're planning a wedding, need professional portraits, or want to capture your special event, 
                I'm here to help bring your vision to life. Let's discuss your project and create memories that will last forever.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Get in Touch
                </a>
                <a href="#portfolio" className="btn btn-outline-light btn-lg">
                  View Portfolio
                </a>
              </div>
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
