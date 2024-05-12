import React from "react";
import MiniHero from "../../components/Hero/MiniHero/MiniHero";
import image from "../../assets/images/landing.jpg";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <MiniHero imageUrl={image} title="About Vision" />
    </div>
  );
};

export default AboutPage;
