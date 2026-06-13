import roteirosData from "/src/data/roteirosData.json";
import { FaMapMarkerAlt, FaBookOpen, FaTimes, FaHeadphones } from "react-icons/fa";
import Footer from "/src/components/footer/Footer";
import { useState } from "react";
import "./Roteiros.css";

export default function Roteiros() {
  const [localSelecionado, setLocalSelecionado] = useState(null);

  return (
    <>
        <div className="pagina-roteiros animate-fade">
            <header className="roteiros-header">
                <h1>Roteiros Históricos</h1>
                <p>Explore os monumentos, praças e locais que guardam a memória e a identidade de Campo Grande.</p>
            </header>

            <div className="grid-roteiros">
                {roteirosData.map((local) => (
                <div key={local.id} className="card-roteiro">
                    <div className="card-tag">{local.categoria}</div>
                    <div className="card-body">
                    <h3>{local.nome}</h3>
                    <p className="local-endereco">
                        <FaMapMarkerAlt /> {local.endereco}
                    </p>
                    <p className="local-resumo">{local.resumo}</p>
                    <button 
                        className="btn-ler-historia" 
                        onClick={() => setLocalSelecionado(local)}
                    >
                        <FaBookOpen /> Conhecer História
                    </button>
                    </div>
                </div>
                ))}
            </div>

            {localSelecionado && (
                <div className="modal-overlay" onClick={() => setLocalSelecionado(null)}>
                <div className="modal-historico" onClick={(e) => e.stopPropagation()}>
                    
                    <button className="btn-fechar-modal" onClick={() => setLocalSelecionado(null)}>
                    <FaTimes />
                    </button>

                    <div className="modal-banner-container">
                    <img 
                        src={localSelecionado.imagem} 
                        alt={localSelecionado.nome} 
                        className="modal-banner-img"
                        onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600";
                        }}
                    />
                    </div>

                    <div className="modal-conteudo-body">
                    <span className="modal-tag">{localSelecionado.categoria}</span>
                    <h2>{localSelecionado.nome}</h2>
                    <p className="modal-endereco"><FaMapMarkerAlt /> {localSelecionado.endereco}</p>
                    
                    <div className="container-audioguia">
                        <div className="audioguia-info">
                        <FaHeadphones className="icon-fone" />
                        <div>
                            <h5>Audioguia Disponível</h5>
                            <p>Ouça a história narrada do monumento</p>
                        </div>
                        </div>
                        <audio controls className="player-audio-nativo">
                        <source src={localSelecionado.audio} type="audio/mpeg" />
                        Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    </div>

                    <div className="modal-texto">
                        <p>{localSelecionado.historia}</p>
                    </div>
                    </div>

                </div>
                </div>
            )}
        </div>
        <Footer />
    </>
  );
}
