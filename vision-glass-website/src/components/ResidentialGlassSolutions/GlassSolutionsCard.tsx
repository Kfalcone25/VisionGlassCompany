// ImageCard.tsx

import React from "react";
import styles from "./GlassSolutionsCard.module.css";

interface ImageCardProps {
  imageUrl: string;
  overlayText: string;
}

const GlassSolutionsCard: React.FC<ImageCardProps> = ({
  imageUrl,
  overlayText,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Card" className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.overlayText}>{overlayText}</p>
      </div>
    </div>
  );
};

export default GlassSolutionsCard;
