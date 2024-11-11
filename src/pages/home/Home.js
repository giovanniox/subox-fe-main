import React from "react";
import "./home.scss"
import CategoryItem from "../../component/categoria/CategoryItem";
import Carousel from "../../component/categoria/carousel/Carousel";

const Home = () => {
  const categories = [
    { title: "Ofertas", imgSrc:   "src/resource/img/categorias/categorias_fardos.png", altText: "Ofertas de zapatos" },
    { title: "Temporada", imgSrc: "src/resource/img/categorias/categorias_fardos.png", altText: "Zapatos de temporada" },
    { title: "Mujer", imgSrc:     "src/resource/img/categorias/categorias_fardos.png", altText: "Zapatos para mujer" },
    { title: "Fardos", imgSrc:    "src/resource/img/categorias/categorias_fardos.png", altText: "Fardos" },
  ];

  return (

    <div className="home">
      <div className="home__jumbotrom">
        <div className="home__jumbotrom-container">
          <div className="home__jumbotrom-sub">
            <h5>¡Entrega Rápida y Calidad Garantizada!</h5>
            <h3>Calidad y Precio en Cada Producto</h3>
            <button>Compra Ofertas</button>
          </div>
          <div className="home__jumbotrom-img">
             <Carousel categories={categories} />
          </div>
        </div>
      </div>

      <div className="home__categories">
        <div className="home__categories-container">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              imgSrc={category.imgSrc}  
              altText={category.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
