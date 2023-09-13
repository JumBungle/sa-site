interface GalleryProps {
  images: string[];
  path: string;
}

function Gallery({ images, path }: GalleryProps) {
  const inColumns = (arr: string[], n: number) => {
    const result = new Array(n).fill(0).map(() => [] as string[]);

    for (let i = 0; i < arr.length; i++) {
      result[i % n].push(arr[i]);
    }

    return result;
  };

  const numberOfColumns = 3;
  const organizedImages = inColumns(images, numberOfColumns);

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
