// CategoryItem.js
import React from 'react';

const CategoryItem = ({ title, imgSrc, altText }) => {
    console.log(imgSrc);
    
  return (
    <div>
      <div className="home__categories-title">
        <span className="home__categories-text">{title}</span>
      </div>
      <div className="home__categories-circle">
        <img src={imgSrc} className="home__categories-circle-img" alt={altText} />
      </div>
    </div>
  );
};

export default CategoryItem;
