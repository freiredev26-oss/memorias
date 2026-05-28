import "./Home.css";
import { useRef } from "react";
import Hero from "/src/components/navbar/hero/Hero";
import { routes } from "/src/data/routesData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoutCard from "../components/routeCard/RoutCard";
import Destaques from "/src/components/destaques/Destaques"
import ComoFunciona from "/src/components/ComoFunciona/ComoFunciona"

function Home() {

  const carrosselRef = useRef(null);

  const rolar = (direcao) => {
    if (carrosselRef.current) {
      const larguraCard = 390;
      if (direcao === "esquerda") {
        carrosselRef.current.scrollLeft -= larguraCard;
      } else {
        carrosselRef.current.scrollLeft += larguraCard;
      }
    }
  };

  return (
    <>
      <Hero />
      
      <section className="routes-section">
        <div className="section-header">
          <div className="section-title">
            <h2>Nossos roteiros</h2>
          </div>
          
          <div className="carousel-nav-buttons">
            <button onClick={() => rolar("esquerda")} className="nav-btn">
              <FaChevronLeft />
            </button>
            <button onClick={() => rolar("direita")} className="nav-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="routes-grid" ref={carrosselRef}>
          {routes.map((route) => (
            <RoutCard key={route.id} route={route} />
          ))}
        </div>
        <div className="info-grid">
            <ComoFunciona />
            <Destaques />
        </div>
      </section>
    </>
  );
}

export default Home;