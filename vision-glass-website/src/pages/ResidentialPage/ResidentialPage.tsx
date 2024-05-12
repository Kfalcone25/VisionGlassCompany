import React from "react";
import MiniHero from "../../components/Hero/MiniHero/MiniHero";
import frameless from "../../assets/images/frameless1.png";

type Props = {};

const ResidentialPage = (props: Props) => {
  return (
    <div>
      <MiniHero title="Residential Glass Solutions" imageUrl={frameless} />
    </div>
  );
};

export default ResidentialPage;
