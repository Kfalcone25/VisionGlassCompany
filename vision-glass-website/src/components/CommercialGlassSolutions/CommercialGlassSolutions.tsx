import React from "react";
import EntranceLogo from "../../assets/images/frameless1.png";
import "./CommercialGlassSolutions.css";
import storefront from "../../assets/images/NavyFederal.jpg";

type Props = {};

const CommercialGlassSolutions = (props: Props) => {
  return (
    <div className="commercial-glass-solutions">
      <h2>Commercial Glass Solutions</h2>
      <p>
        Vision Glass is your trusted partner for all your commercial glazing
        needs. We offer a wide range of high-quality glass solutions, including:
      </p>

      <div className="card-grid">
        <div className="card">
          <img src={storefront} alt="Storefront" />
          <h3>Storefronts</h3>
          <p>
            Enhance your business's entrance with our stylish and durable
            storefront glass systems.
          </p>
        </div>

        <div className="card">
          <img src="path/to/curtain-wall-image.jpg" alt="Curtain Wall" />
          <h3>Curtain Walls</h3>
          <p>
            Create a stunning exterior with our energy-efficient and visually
            appealing curtain wall solutions.
          </p>
        </div>

        <div className="card">
          <img src="path/to/entrance-system-image.jpg" alt="Entrance System" />
          <h3>Entrance Systems</h3>
          <p>
            Make a great first impression with our sleek and functional entrance
            systems.
          </p>
        </div>

        <div className="card">
          <img src="path/to/custom-glazing-image.jpg" alt="Custom Glazing" />
          <h3>Custom Glazing Installations</h3>
          <p>
            We specialize in custom glazing projects tailored to your specific
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommercialGlassSolutions;
