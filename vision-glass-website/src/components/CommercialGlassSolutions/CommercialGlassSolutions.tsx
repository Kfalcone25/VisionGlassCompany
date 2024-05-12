import React from "react";
import EntranceLogo from "../../assets/images/frameless1.png";
import "./CommercialGlassSolutions.css";
import storefront from "../../assets/images/NavyFederal.jpg";
import storageUnit from "../../assets/images/storageUnit.jpg";
import impactDoor from "../../assets/images/ImpactDoor.jpg";
import officeSpace from "../../assets/images/officeSpace.jpg";

type Props = {};

const CommercialGlassSolutions = (props: Props) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Commercial Glass Solutions
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="service-card">
            <img
              src={storefront}
              alt="StoreFront Systems"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold">StoreFront Systems</h3>
            <p>
              Enhance your business visibility with our custom-designed
              storefront systems.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Learn More
            </a>
          </div>
          <div className="service-card">
            <img
              src={officeSpace}
              alt="Custom Glass Fabrication"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold">Custom Glass Fabrication</h3>
            <p>
              Precision glass solutions tailored to meet unique architectural
              demands.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Learn More
            </a>
          </div>
          <div className="service-card">
            <img
              src={impactDoor}
              alt="Impact Entrance Doors"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold">Impact Entrance Doors</h3>
            <p>
              Robust and stylish doors designed to make a statement and protect.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Learn More
            </a>
          </div>
          <div className="service-card">
            <img
              src={storageUnit}
              alt="Commercial Glass Systems"
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold">
              Major Commercial Glass Systems
            </h3>
            <p>
              Comprehensive glass solutions for large scale commercial projects.
            </p>
            <a href={storageUnit} className="text-blue-500 hover:text-blue-700">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialGlassSolutions;
