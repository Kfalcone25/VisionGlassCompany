import React from "react";
import MiniHero from "../../components/Hero/MiniHero/MiniHero";
import commercial from "../../assets/images/NavyFederal.jpg";

type Props = {};

const CommercialPage = (props: Props) => {
  return (
    <div>
      <MiniHero imageUrl={commercial} title="Commercial Glass Solutions" />
    </div>
  );
};

export default CommercialPage;
