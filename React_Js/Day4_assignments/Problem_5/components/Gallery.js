import React from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { title: "Sunset", price: 25, imgSrc: "https://via.placeholder.com/150" },
    { title: "Forest", price: 35, imgSrc: "https://via.placeholder.com/150" },
    { title: "Mountain", price: 45, imgSrc: "https://via.placeholder.com/150" },
    // Add more images as needed
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  );
};

export default Gallery;
