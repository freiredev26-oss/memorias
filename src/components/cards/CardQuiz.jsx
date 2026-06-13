import { useState, useEffect } from "react";
import { FaGamepad, FaArrowRight, FaTrophy } from "react-icons/fa";

export default function CardQuiz({ quiz }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarPlacar, setMostrarPlacar] = useState(false);

  useEffect(() => {
    setPerguntaAtual(0);
    setOpcaoSelecionada(null);
    setPontuacao(0);
    setMostrarPlacar(false);
  }, [quiz]);

  const q = quiz.perguntas[perguntaAtual];

  const handleOpcaoClick = (opcaoIndex) => {
    if (opcaoSelecionada !== null) return;
    setOpcaoSelecionada(opcaoIndex);
    
    if (opcaoIndex === q.correta) {
      setPontuacao((prev) => prev + 1);
    }
  };

  const handleProximaPergunta = () => {
    setOpcaoSelecionada(null);
    const proximoIndex = perguntaAtual + 1;
    
    if (proximoIndex < quiz.perguntas.length) {
      setPerguntaAtual(proximoIndex);
    } else {
      setMostrarPlacar(true);
    }
  };

  const reiniciarJogo = () => {
    setPerguntaAtual(0);
    setOpcaoSelecionada(null);
    setPontuacao(0);
    setMostrarPlacar(false);
  };

  if (mostrarPlacar) {
    return (
      <div className="coluna-recurso card-jogo">
        <div className="recurso-title">
          <FaTrophy className="icon-recurso text-yellow" />
          <h3>Quiz Concluído!</h3>
        </div>
        <div className="placar-final-box animate-fade">
          <h4>🌟 Excelente Trabalho! 🌟</h4>
          <p>Você acertou <strong>{pontuacao}</strong> de <strong>{quiz.perguntas.length}</strong> desafios!</p>
          
          <div className="feedback-medalha">
            {pontuacao === quiz.perguntas.length ? (
              <span>🥇 Medalha de Ouro! Você sabe tudo de Campo Grande!</span>
            ) : (
              <span>🥈 Muito bem! Continue estudando os nossos roteiros!</span>
            )}
          </div>
          
          <button className="btn-print" style={{ alignSelf: "center", marginTop: "20px" }} onClick={reiniciarJogo}>
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }

  const jaRespondida = opcaoSelecionada !== null;

  return (
    <div className="coluna-recurso card-jogo">
      <div className="recurso-title">
        <FaGamepad className="icon-recurso text-green" />
        <h3>Quiz Digital da Série</h3>
      </div>
      <p className="recurso-desc"><strong>Tema:</strong> {quiz.tema}</p>

      <div className="mini-quiz-box animate-fade">
        <div className="quiz-status-topo">
          <span>Pergunta <strong>{perguntaAtual + 1}</strong> de {quiz.perguntas.length}</span>
        </div>

        <div className="mini-quiz-item">
          <h4>{q.pergunta}</h4>
          <div className="mini-opcoes">
            {q.opcoes.map((opcao, oIndex) => {
              let labelClasse = "opcao-label";
              if (jaRespondida) {
                if (oIndex === q.correta) labelClasse += " correta";
                else if (opcaoSelecionada === oIndex) labelClasse += " errada";
                else labelClasse += " desativada";
              }

              return (
                <button
                  key={oIndex}
                  className={labelClasse}
                  onClick={() => handleOpcaoClick(oIndex)}
                  disabled={jaRespondida}
                >
                  {opcao}
                </button>
              );
            })}
          </div>

          {jaRespondida && (
            <div className="feedback-proxima-container animate-fade">
              <div className={`quiz-feedback-banner ${opcaoSelecionada === q.correta ? "fb-certo" : "fb-errado"}`}>
                {opcaoSelecionada === q.correta ? "🌟 Resposta Certa!" : "❌ Tente novamente no próximo!"}
              </div>
              
              <button className="btn-proxima-pergunta" onClick={handleProximaPergunta}>
                {perguntaAtual + 1 === quiz.perguntas.length ? "Ver Resultado" : "Próxima Pergunta"} 
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}