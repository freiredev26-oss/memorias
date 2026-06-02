import "./Home.css";
import { useRef } from "react";
import Hero from "/src/components/hero/Hero";
import { routes } from "/src/data/routesData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoutCard from "/src/components/routeCard/RoutCard";
import Destaques from "/src/components/destaques/Destaques"
import ComoFunciona from "/src/components/comoFunciona/ComoFunciona"
import Numeros from "/src/components/numeros/Numeros";
import Footer from "/src/components/footer/Footer";
import Cta from "/src/components/cta/Cta"

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
        <div className="informacao">
            <ComoFunciona />
            <Destaques />
        </div>
        <Numeros />
        <Cta />
      </section>
      <Footer />
    </>
  );
}

export default Home;