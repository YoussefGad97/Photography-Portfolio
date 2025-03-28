import React, { useEffect, useState } from "react";
import { Typography, Container, Button } from "@mui/material";
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

      <section className="intro-section">
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

      <section className="quote-section">
        <Container>
          <Typography variant="h4">
            "Photography is the story I fail to put into words"
          </Typography>
          <Typography>- Destin Sparks</Typography>
        </Container>
      </section>
    </div>
  );
};

export default Home;
