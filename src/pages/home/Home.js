import React, { useState, useEffect } from "react";
import "./home.scss";
import CategoryItem from "../../component/categoria/CategoryItem";
import Jumbotrom from "./component/jumbotrom/jumbotrom";

const Home = () => {
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  // Función para obtener las categorías
  const fetchCategories = async () => {
    // Simula una API que devuelve las categorías
    return [
      { imgSrc: "https://via.placeholder.com/150", title: "Ofertas", altText: "Ofertas de zapatos" },
      { imgSrc: "https://via.placeholder.com/150", title: "Temporada", altText: "Zapatos de temporada" },
      { imgSrc: "https://via.placeholder.com/150", title: "Mujer", altText: "Zapatos para mujer" },
      { imgSrc: "https://via.placeholder.com/150", title: "Fardos", altText: "Fardos" },
    ];
  };

  // Carga las categorías cuando el componente se monta
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };

    loadCategories();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div className="home">
      {/* JUMBOTROM */}
      <Jumbotrom categories={categories} />

      {/* CATEGORIES */}
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
