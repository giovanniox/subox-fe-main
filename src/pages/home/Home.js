import React from "react";
import "./home.scss"
import iconNiños from "./niños.png";

import iconWoman from "./woman.png";
import iconMen from "./men.png";
import iconTemp from "./temp.png";
import iconOfer from "./ofer.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home__jumbotrom">
        <div className="home__jumbotrom-container">
          <div className="home__jumbotrom-sub">
            <h1>Conoce la nueva forma de comprar ropa</h1>
            <p>recibe 2 prendas al mes</p>
            <h2>$7990</h2>
            <button>Unirme Al Club</button>
          </div>
          <div className="home__jumbotrom-img">
              <img
                // src={iconOfer}
                className="home__categories-container-circle-img"
                alt="Zapato Azul"
              />
          </div>
        </div>
      </div>

      <div className="home__categories">
        <div className="home__categories-container">
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Ofertas</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconOfer}
                className="home__categories-circle-img"
                alt="Zapato Azul"
              />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Temporada</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconTemp}
                className="home__categories-circle-img"
                alt="Zapato Azul"
              />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Mujer</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconWoman}
                className="home__categories-circle-img"
                alt="Zapato Azul"
              />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Niños</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconNiños}
                className="home__categories-circle-img"
                alt="Zapato Azul"
              />
            </div>
          </div>
          <div>
            <div className="home__categories-title">
              <span className="home__categories-text">Hombre</span>
            </div>
            <div className="home__categories-circle">
              <img
                src={iconMen}
                className="home__categories-circle-img"
                alt="Zapato Azul"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
