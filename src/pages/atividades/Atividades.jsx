import "./Atividades.css";
import React, { useState } from "react";
import { seriesData } from "/src/data/activitiesData";
import { FaGraduationCap } from "react-icons/fa";
import Footer from "/src/components/footer/Footer";
import CardImpressao from "/src/components/cards/CardImpressao";
import CardQuiz from "/src/components/cards/CardQuiz";

export default function Atividades() {
  const [serieSelecionada, setSerieSelecionada] = useState(null);
  const [respostaQuiz, setRespostaQuiz] = useState({});

  const handleSelectSerie = (ano) => {
    setSerieSelecionada(ano);
    setRespostaQuiz({}); 
  };

  const handleOpcaoQuiz = (perguntaIndex, opcaoIndex) => {
    setRespostaQuiz({
      ...respostaQuiz,
      [perguntaIndex]: opcaoIndex
    });
  };

  const currentData = seriesData[serieSelecionada];

  return (
        <div className="portal-atividades">
      <header className="portal-header">
        <span className="portal-tag">Espaço do Educador</span>
        <h1>Atividades Pedagógicas</h1>
        <p>Selecione o ano escolar para acessar materiais didáticos de História Regional prontas para imprimir e Quizzes interativos.</p>
      </header>

      <section className="menu-series">
        {[1, 2, 3, 4, 5].map((ano) => (
          <button
            key={ano}
            className={`btn-serie ${serieSelecionada === ano ? "active-serie" : ""}`}
            onClick={() => handleSelectSerie(ano)}
          >
            <FaGraduationCap className="icon-cap" />
            <span>{ano}º Ano</span>
          </button>
        ))}
      </section>

      {!serieSelecionada && (
        <div className="aviso-inicial">
          <p>💡 Escolha uma das séries acima para visualizar as folhas de atividades e os jogos digitais.</p>
        </div>
      )}

      {serieSelecionada && currentData && (
        <div className="conteudo-serie animate-fade">
          
          <div className="serie-intro">
            <h2>{currentData.titulo}</h2>
            <p>{currentData.descricao}</p>
          </div>

          <div className="painel-recursos">
            <CardImpressao paraImprimir={currentData.paraImprimir} />
            <CardQuiz 
              quiz={currentData.quiz} 
              respostaQuiz={respostaQuiz} 
              onOpcaoQuiz={handleOpcaoQuiz} 
            />
          </div>
          
        </div>
      )}

    
    </div>
  );
}
