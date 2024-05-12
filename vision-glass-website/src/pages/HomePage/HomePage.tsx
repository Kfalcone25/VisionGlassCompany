import React from "react";
import Navbar from "../../components/common/Navbar/Navbar.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import ResidentialGlassSolutions from "../../components/ResidentialGlassSolutions/ResidentialGlassSolutions";
import Footer from "../../components/common/Footer/Footer.tsx";
import CommercialGlassSolutions from "../../components/CommercialGlassSolutions/CommercialGlassSolutions.tsx";
import InstallGuide from "../../components/InstallGuide/InstallGuide.tsx";
import CTAForm from "../../components/CTAForm/CTAForm.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <ResidentialGlassSolutions />
      <InstallGuide />
      <CommercialGlassSolutions />
      <CTAForm />
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
