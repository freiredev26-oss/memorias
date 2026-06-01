import "./Atividades.css";
import { FaGraduationCap } from "react-icons/fa";
import Footer from "/src/components/footer/Footer";

export default function Atividades() {
  return (
    <>
      <div className="portal-atividades">
        <header className="portal-header">
          <span className="portal-tag">Espaço do Educador</span>
          <h1>Atividades Pedagógicas</h1>
          <p>
            Selecione o ano escolar para acessar materiais didáticos de História Regional 
            prontas para imprimir e Quizzes interativos.
          </p>
        </header>

        <section className="menu-series">
          {[1, 2, 3, 4, 5].map((ano) => (
            <button key={ano} className="btn-serie">
              <FaGraduationCap className="icon-cap" />
              <span>{ano}º Ano</span>
            </button>
          ))}
        </section>

        <div className="aviso-inicial">
          <p>💡 Escolha uma das séries acima para visualizar as folhas de atividades e os jogos digitais.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
