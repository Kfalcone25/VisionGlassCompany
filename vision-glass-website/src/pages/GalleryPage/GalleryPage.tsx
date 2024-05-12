import React, { useState } from "react";
import { CategoryKeys, categories } from "../../utils/GalleryData";
import "../../index.css";

type Props = {};

const Gallery = (props: Props) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryKeys>("All categories");
  const [images, setImages] = React.useState<string[]>([]);

  const handleCategoryChange = (category: CategoryKeys) => {
    setSelectedCategory(category);
    setImages(categories[category]);
  };

  const gridColumns = images.length <= 3 ? images.length : 3; // Adjust columns based on image count

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            onClick={() => handleCategoryChange(category as CategoryKeys)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={`grid grid-cols-${gridColumns} gap-4 justify-center`}>
        {images.map((image: any, index: any) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
