import { useState } from "react";
import Button from "./Button";

function Carousel() {
  const images = [
    {
      src: "src/images/jazz16x9.jpg",
      alt: "Jazz album artwork",
      title: "Jazz in Color",
      description:
        "Iconic jazz photos illustrated and colorized for CU Boulder's Thompson School for Jazz Studies",
    },
    {
      src: "src/images/albumart-16x9.jpg",
      alt: "Album artwork",
      title: "Album Art",
      description: "Graphic Design, Art Direction",
    },
    {
      src: "src/images/expert16x9.jpg",
      alt: "Expert website design",
      title: "Expert: A DIY app case study",
    },
    {
      src: "src/images/perfectproperties16x9.jpg",
      alt: "Perfect Properties website design",
      title: "Perfect Properties: Real Estate App UI Design",
    },
    {
      src: "src/images/I-DO-16x9.jpg",
      alt: "I Do Boozes and Brews branding",
      title: "I Do: Branding and Web Design",
    },
    {
      src: "src/images/posters16x9.jpg",
      alt: "Promotional poster designs",
      title: "Promotional Poster Design",
    },
    {
      src: "src/images/logos16x9.jpg",
      alt: "Logo design examples",
      title: "Logo Design",
    },
    {
      src: "src/images/studybuddy16x9.jpg",
      alt: "Study Buddy app design",
      title: "Study Buddy: A Flashcard App",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={images[currentImage].src} alt={images[currentImage].alt} />

        <div className="carousel-text">
          <h2>{images[currentImage].title}</h2>
          <p>{images[currentImage].description}</p>
        </div>
      </div>
      <div className="carousel-buttons-wrapper">
        <Button
          variant="outline"
          className="carousel-arrow"
          onClick={() =>
            setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length)
          }>
          <span aria-hidden="true">‹</span>
          <span className="sr-only">Previous project</span>
        </Button>
        <div className="carousel-dots">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={currentImage === index ? "active" : ""}>
              ●
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          className="carousel-arrow"
          onClick={() => setCurrentImage((currentImage) => (currentImage + 1) % images.length)}>
          <span aria-hidden="true">›</span>
          <span className="sr-only">Next project</span>
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
