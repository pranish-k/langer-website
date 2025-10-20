import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      type: "book",
      content: (
        <div className="carousel-slide book-slide">
          <h2 style={{ color: "#5A87B4", marginBottom: "20px" }}>
            NEW RELEASE - 2025
          </h2>
          <a
            href="https://link.springer.com/book/10.1007/978-3-031-76212-3"
            target="_blank"
            rel="noopener noreferrer"
            className="book-link"
          >
            <img
              src="https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-76212-3?as=webp"
              alt="Analysis and Design of Next-Generation Software Architectures - 2nd Edition"
              className="book-cover-large"
            />
            <h3 style={{ marginTop: "20px", color: "#333" }}>
              Analysis and Design of Next-Generation Software Architectures
            </h3>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Generative AI, Cybersecurity, and Cloud Computing - 2nd Edition
            </p>
            <button className="cta-button">View Book →</button>
          </a>
        </div>
      ),
    },
    {
      id: 2,
      type: "event",
      content: (
        <div className="carousel-slide event-slide">
          <h2
            style={{ color: "#5A87B4", marginBottom: "20px", fontSize: "36px" }}
          >
            Join Art at Nutanix Masterclass
          </h2>
          <a
            href="https://event.nutanix.com/masterclasshub"
            target="_blank"
            rel="noopener noreferrer"
            className="nutanix-link"
          >
            <img
              src="/art_nutanix.png"
              alt="Art Langer at Nutanix Masterclass"
              className="nutanix-image"
            />
          </a>
        </div>
      ),
    },
    {
      id: 3,
      type: "video",
      content: (
        <div className="carousel-slide video-slide">
          <div className="video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/NXX91lr_xRA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="slide-caption">Featured Video Presentation</p>
        </div>
      ),
    },
    {
      id: 4,
      type: "video",
      content: (
        <div className="carousel-slide video-slide">
          <div className="video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/2DwJFY34_yY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="slide-caption">Featured Video Presentation</p>
        </div>
      ),
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide-wrapper ${
              index === currentSlide ? "active" : ""
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={goToPrevious}>
        ‹
      </button>
      <button className="carousel-arrow next" onClick={goToNext}>
        ›
      </button>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
