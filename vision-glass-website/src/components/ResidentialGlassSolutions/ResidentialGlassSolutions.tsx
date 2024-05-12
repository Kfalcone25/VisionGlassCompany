import React, { useState } from "react";
import "./ResidentialGlassSolutions.css";
import image1 from "../../assets/images/frameless1.png";

const ResidentialGlassSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      id: 1,
      title: "Shower Doors",
      image: image1,
    },
    {
      id: 2,
      title: "Window Repair",
      image: image1,
    },
    {
      id: 3,
      title: "Mirrors",
      image: image1,
    },
    {
      id: 4,
      title: "Table Tops",
      image: image1,
    },
    {
      id: 5,
      title: "Custom Glass",
      image: image1,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(services.length - 3, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="glass-aluminum-services">
      <h2>End-to-End Residential Services</h2>
      <div className="services-container">
        <button className="arrow arrow-left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="services-grid">
          {services.slice(currentIndex, currentIndex + 3).map((service) => (
            <div key={service.id} className="service-item">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
        <button className="arrow arrow-right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ResidentialGlassSolutions;
