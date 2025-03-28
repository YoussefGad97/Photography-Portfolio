import React, { useEffect, useState } from "react";
import { Typography, Container, Button, Dialog } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Home.scss";
import galleryImg1 from "../assets/images/gallery1.jpg";
import galleryImg2 from "../assets/images/gallery2.jpg";
import galleryImg3 from "../assets/images/gallery3.jpg";
import galleryImg4 from "../assets/images/gallery4.jpg";
import galleryImg5 from "../assets/images/gallery5.jpg";
import galleryImg6 from "../assets/images/gallery6.jpg";
import gearBgImage from '../assets/images/gear-bg.jpg';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: galleryImg1,
    title: "Mountain Sunrise",
    description:
      "Captured at dawn, this serene mountain landscape showcases nature at its finest. Shot with Canon EOS R5, f/8, 1/250s, ISO 100.",
    category: "Landscape",
  },
  {
    id: 2,
    image: galleryImg2,
    title: "Urban Portrait",
    description:
      "A contemporary portrait shot in the heart of the city. Natural lighting combined with urban elements. Shot with Sony A7III, f/1.8, 1/200s, ISO 200.",
    category: "Portrait",
  },
  {
    id: 3,
    image: galleryImg3,
    title: "City Lights",
    description:
      "Night photography capturing the vibrant city life. Shot with Canon EOS R6, f/2.8, 1/60s, ISO 3200.",
    category: "Urban",
  },
  {
    id: 4,
    image: galleryImg4,
    title: "Wildlife Close-up",
    description:
      "An intimate portrait of wildlife in their natural habitat. Shot with Sony A7R IV, f/4, 1/1000s, ISO 400.",
    category: "Wildlife",
  },
  {
    id: 5,
    image: galleryImg5,
    title: "Wedding Moments",
    description:
      "Capturing the joy and emotion of a special day. Shot with Canon EOS R5, f/2, 1/200s, ISO 400.",
    category: "Wedding",
  },
  {
    id: 6,
    image: galleryImg6,
    title: "Abstract Architecture",
    description:
      "Modern architectural forms creating abstract patterns. Shot with Nikon Z7 II, f/8, 1/250s, ISO 100.",
    category: "Architecture",
  },
];

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-item-overlay">
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="subtitle1">{item.category}</Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Move Dialog outside the featured-section */}
      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        maxWidth="lg"
        className="gallery-dialog"
      >
        {selectedItem && (
          <div className="gallery-dialog-content">
            <button
              className="close-button"
              onClick={() => setSelectedItem(null)}
            >
              <CloseIcon />
            </button>
            <div className="dialog-image">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="dialog-info">
              <Typography variant="h4">{selectedItem.title}</Typography>
              <Typography variant="subtitle1" className="category">
                {selectedItem.category}
              </Typography>
              <Typography className="description">
                {selectedItem.description}
              </Typography>
            </div>
          </div>
        )}
      </Dialog>

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
                Using top-of-the-line Canon and Sony equipment for the highest
                quality results
              </Typography>
            </div>
            <div className="gear-item">
              <CameraIcon className="gear-icon" />
              <Typography variant="h6">10+ Years Experience</Typography>
              <Typography>
                Extensive experience in various photography styles and
                techniques
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
                role: "Wedding Clients",
              },
              {
                text: "Professional, creative, and a joy to work with!",
                author: "Michael Smith",
                role: "Corporate Client",
              },
              {
                text: "The photos exceeded our expectations!",
                author: "Emma Davis",
                role: "Portrait Client",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Typography className="testimonial-text">
                  "{testimonial.text}"
                </Typography>
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
