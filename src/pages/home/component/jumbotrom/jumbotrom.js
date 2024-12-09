import React from "react";
import "./jumbotrom.scss"
import Carousel from "../../../../component/categoria/carousel/Carousel";



const Jumbotrom = ({categories}) => {
  return (
      <div className="jumbotrom">
        <div className="jumbotrom__container">
          {/* main-box*/}
          <div className="jumbotrom__container__main-box">
            <h5 className="jumbotrom__container__main-box__text-00">¡Entrega Rápida y Calidad Garantizada!</h5>
            <h3 className="jumbotrom__container__main-box__text-01">Calidad y Precio en Cada Producto</h3>
            <button className="jumbotrom__container__main-box__button-00">Compra Ofertas</button>
          </div>
          {/* main-carrusel*/}
          <div className="jumbotrom__container__main-carrusel">
             <Carousel categories={categories} />
          </div>
        </div>
      </div>
  );
};

export default Jumbotrom;
