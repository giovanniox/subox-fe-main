import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
const Carousel = ({ categories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Cambia la cantidad según las imágenes que desees mostrar a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="carousel__item">
            <img src={category.imgSrc} alt={category.altText} className="carousel__item-image" />
            <h3 className="carousel__item-title">{category.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
