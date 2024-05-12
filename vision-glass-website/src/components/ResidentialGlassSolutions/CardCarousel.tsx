// CardCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CardCarousel.module.css";
import GlassSolutionsCard from "./GlassSolutionsCard";

interface CardCarouselProps {
  cards: { imageUrl: string; overlayText: string }[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <Slider className="my-slider" {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <div className={styles.cardWrapper}>
              <GlassSolutionsCard
                imageUrl={card.imageUrl}
                overlayText={card.overlayText}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
