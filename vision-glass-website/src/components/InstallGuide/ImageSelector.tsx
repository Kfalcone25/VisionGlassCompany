import React, { useState } from "react";
import styles from "./ImageSelector.module.css";

const placeholderImages = [
  "https://via.placeholder.com/400x300.png?text=Consultation+Phase",
  "https://via.placeholder.com/400x300.png?text=Measurement+and+Design",
  "https://via.placeholder.com/400x300.png?text=Fabrication",
  "https://via.placeholder.com/400x300.png?text=Installation",
  "https://via.placeholder.com/400x300.png?text=Cleaning+and+Finishing",
];

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(placeholderImages[0]);

  return (
    <div className={styles.galleryContainer}>
      <img src={selectedImage} alt="Selected" className={styles.mainImage} />
      <div className={styles.thumbnailContainer}>
        {placeholderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={
              img === selectedImage
                ? `${styles.thumbnail} ${styles.thumbnailActive}`
                : styles.thumbnail
            }
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
