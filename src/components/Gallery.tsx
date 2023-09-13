import React from "react";
import { useColumns } from "../hooks/inColumns";

interface GalleryProps {
  images: string[];
  path: string;
}

function Gallery({ images, path }: GalleryProps) {
  const organizedImages = useColumns(images, 3);

  return (
    <div className="gallery-container">
      {organizedImages.map((column, columnIndex) => (
        <div key={columnIndex} className="gallery-column">
          {column.map((image, imageIndex) => (
            <img src={`${path}${image}.jpg`} key={imageIndex} alt={image} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
