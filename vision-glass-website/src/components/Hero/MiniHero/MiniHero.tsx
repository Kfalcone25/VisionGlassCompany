import React from "react";
import "./MiniHero.css";
interface Props {
  title: string;
  imageUrl: string;
}

const MiniHero = ({ title, imageUrl }: Props) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    height: "500px", // Define a height for the element
    width: "100%", // Make it full width
    backgroundSize: "contain", // Cover the entire area of the element
    backgroundPosition: "center", // Center the background image
    
  };
  return (
    <div className="mini-hero" style={style}>
      <div className="overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MiniHero;
