import React from "react";
import "./home.scss"



const Home = () => {
  return (
 
      <div className="home">
        <div className="home__jumbotrom">
          <div className="home__jumbotrom-container">
            <div className="home__jumbotrom-sub">
              <h1>publc</h1>
              <h1>publc</h1>
              <h1>publc</h1>
              <button>Unirme Al Club</button>
            </div>
            <div className="home__jumbotrom-img">
              <img
                className="home__categories-container-circle-img"
                alt="Zapato Azul" />
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
                  className="home__categories-circle-img"
                  alt="Zapato Azul" />
              </div>
            </div>
            <div>
              <div className="home__categories-title">
                <span className="home__categories-text">Temporada</span>
              </div>
              <div className="home__categories-circle">
                <img
                  className="home__categories-circle-img"
                  alt="Zapato Azul" />
              </div>
            </div>
            <div>
              <div className="home__categories-title">
                <span className="home__categories-text">Mujer</span>
              </div>
              <div className="home__categories-circle">
                <img
                  className="home__categories-circle-img"
                  alt="Zapato Azul" />
              </div>
            </div>
            <div>
              <div className="home__categories-title">
                <span className="home__categories-text">Niños</span>
              </div>

            </div>
            <div>
              <div className="home__categories-title">
                <span className="home__categories-text">Hombre</span>
              </div>
              <div className="home__categories-circle">
                <img
                  className="home__categories-circle-img"
                  alt="Zapato Azul" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
