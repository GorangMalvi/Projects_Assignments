import React from 'react';
import './ImageCard.css';

const ImageCard = ({ title, price, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
