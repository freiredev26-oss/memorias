import { useState } from "react";
import { FaMapMarkerAlt, FaTimes, FaHeadphones, FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ModalHistorico({ local, onClose }) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const numeroWhats = "5567984821570"; 
  const mensagemPronta = encodeURIComponent(`Olá! Gostaria de colaborar enviando fotos/relatos históricos sobre: ${local.nome}`);
  const urlWhats = `https://wa.me/${numeroWhats}?text=${mensagemPronta}`;

  const moverProxima = () => {
    setImagemAtual((prev) => (prev === local.imagens.length - 1 ? 0 : prev + 1));
  };

  const moverAnterior = () => {
    setImagemAtual((prev) => (prev === 0 ? local.imagens.length - 1 : prev - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-historico" onClick={(e) => e.stopPropagation()}>
        
        <button className="btn-fechar-modal" onClick={onClose} aria-label="Fechar card">
          <FaTimes />
        </button>

        <div className="modal-carrossel-container">
          <img 
            src={local.imagens[imagemAtual]} 
            alt={`${local.nome} - Registro ${imagemAtual + 1}`} 
            className="modal-carrossel-img"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600";
            }}
          />
          
          {local.imagens.length > 1 && (
            <>
              <button className="seta-carrossel seta-esquerda" onClick={moverAnterior}>
                <FaChevronLeft />
              </button>
              <button className="seta-carrossel seta-direita" onClick={moverProxima}>
                <FaChevronRight />
              </button>
              <div className="carrossel-indicador">
                {imagemAtual + 1} / {local.imagens.length}
              </div>
            </>
          )}
        </div>

        <div className="modal-conteudo-body">
          <span className="modal-tag">{local.categoria.replace("_", " ")}</span>
          <h2>{local.nome}</h2>
          <p className="modal-endereco"><FaMapMarkerAlt /> {local.endereco}</p>
          
          <div className="modal-texto">
            <p>{local.historia}</p>
          </div>

          {local.audio && (
            <div className="container-audioguia">
              <div className="audioguia-info">
                <FaHeadphones className="icon-fone" />
                <div>
                  <h5>Audioguia Histórico</h5>
                  <p>Ouça a explicação em áudio gravada pelos estudantes</p>
                </div>
              </div>
              <audio controls className="player-audio-nativo" key={local.id}>
                <source src={local.audio} type="audio/mpeg" />
                Seu navegador não possui suporte para áudio.
              </audio>
            </div>
          )}

          <div className="container-contribuicao">
            <h4>Tem acervos antigos ou memórias deste lugar?</h4>
            <p>Envie fotografias antigas, vídeos ou áudios gravados para ajudar nossa pesquisa escolar a crescer!</p>
            <a href={urlWhats} target="_blank" rel="noreferrer" className="btn-contribuir-whats">
              <FaWhatsapp /> Enviar Arquivos pelo WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
