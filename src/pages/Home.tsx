import React, { useEffect, useState } from "react";
import { Typography, Container, Button } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import "../styles/Home.scss";

const Home = () => {
  const [offset, setOffset] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
        <div className="hero-content">
          <Typography variant="h1">John Doe</Typography>
          <Typography variant="h2">Photography Portfolio</Typography>
        </div>
      </section>

      <section className="welcome-section">
        <Container>
          <Typography variant="h3">Welcome to My World</Typography>
          <Typography>
            Capturing life's precious moments through the lens of creativity and
            passion. Specializing in portrait, landscape, and event photography.
          </Typography>
        </Container>
      </section>

      <section className="featured-section">
        <Container>
          <Typography variant="h3">Featured Work</Typography>
          <div className="image-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="image-box">
                <img
                  src={`/path-to-your-image-${item}.jpg`}
                  alt={`Featured work ${item}`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="quote-banner">
        <Container>
          <Typography variant="h4">
            "Photography is the story I fail to put into words"
          </Typography>
          <Typography>- Destin Sparks</Typography>
        </Container>
      </section>

      <section className="gear-section">
        <div className="gear-bg"></div>
        <Container>
          <Typography variant="h3">Gear & Expertise</Typography>
          <div className="gear-grid">
            <div className="gear-item">
              <CameraIcon className="gear-icon" />
              <Typography variant="h6">Professional Equipment</Typography>
              <Typography>
                Using top-of-the-line Canon and Sony equipment for the highest quality results
              </Typography>
            </div>
            <div className="gear-item">
              <CameraIcon className="gear-icon" />
              <Typography variant="h6">10+ Years Experience</Typography>
              <Typography>
                Extensive experience in various photography styles and techniques
              </Typography>
            </div>
            <div className="gear-item">
              <CameraIcon className="gear-icon" />
              <Typography variant="h6">Post-Processing</Typography>
              <Typography>
                Expert editing skills using industry-standard software
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      <section className="testimonials-section">
        <Container>
          <Typography variant="h3">Client Testimonials</Typography>
          <div className="testimonials-grid">
            {[
              {
                text: "Absolutely amazing work! Captured our wedding perfectly.",
                author: "Sarah & John",
                role: "Wedding Clients"
              },
              {
                text: "Professional, creative, and a joy to work with!",
                author: "Michael Smith",
                role: "Corporate Client"
              },
              {
                text: "The photos exceeded our expectations!",
                author: "Emma Davis",
                role: "Portrait Client"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Typography className="testimonial-text">"{testimonial.text}"</Typography>
                <Typography variant="h6">{testimonial.author}</Typography>
                <Typography variant="subtitle2">{testimonial.role}</Typography>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
