import { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt, FaFish, FaTree, FaChurch, FaShieldAlt, FaBuilding } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import roteirosData from "/src/data/roteirosData.json";
import ModalHistorico from "./ModalHistorico";
import Footer from "/src/components/footer/Footer";
import "./Roteiros.css";


const gerarMarcadorTematico = (ComponenteIcone, corDeFundo) => {
  const iconeHtml = renderToString(<ComponenteIcone style={{ color: "#ffffff", fontSize: "14px" }} />);
  
  return new L.DivIcon({
    html: `
      <div class="pino-mapa-wrapper">
        <div class="pino-gota" style="background-color: ${corDeFundo};">
          <div class="pino-icone-interno">${iconeHtml}</div>
        </div>
        <div class="pino-sombra"></div>
      </div>
    `,
    className: "marcador-customizado-leaflet",
    iconSize: [36, 46],
    iconAnchor: [18, 46]
  });
};


const mapeamentoDeCategorias = {
  aquario: gerarMarcadorTematico(FaFish, "#0284c7"),         
  parque: gerarMarcadorTematico(FaTree, "#16a34a"),          
  praca_papa: gerarMarcadorTematico(FaChurch, "#db2777"),    
  quartel: gerarMarcadorTematico(FaShieldAlt, "#15803d"),     
  praca: gerarMarcadorTematico(FaTree, "#22c55e"),           
  cultura: gerarMarcadorTematico(FaBuilding, "#9333ea"),     
  monumento: gerarMarcadorTematico(FaMapMarkerAlt, "#ea580c") 
};

export default function Roteiros() {
  const [localSelecionado, setLocalSelecionado] = useState(null);
  const centroCampoGrande = [-20.46401, -54.61629]; 

  return (
    <>
      <div className="pagina-roteiros animate-fade">
        <header className="roteiros-header">
          <h1>Mapa Cultural e Histórico</h1>
          <p>Explore os patrimônios de Campo Grande. Passe o mouse sobre os pinos para ler as legendas e clique para abrir as mídias.</p>
        </header>

        <div className="mapa-container-box">
          <MapContainer 
            center={centroCampoGrande} 
            zoom={13} 
            scrollWheelZoom={true}
            className="mapa-elemento"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {roteirosData.map((local) => {
              const iconeMarcador = mapeamentoDeCategorias[local.categoria] || mapeamentoDeCategorias.monumento;
              
              return (
                <Marker 
                  key={local.id} 
                  position={local.coordenadas}
                  icon={iconeMarcador}
                  eventHandlers={{
                    click: () => setLocalSelecionado(local)
                  }}
                >
                  
                  <Tooltip direction="top" offset={[0, -40]} opacity={1}>
                    <div className="mapa-tooltip-legenda">
                      <strong>{local.nome}</strong>
                      <span>Ver arquivos de mídia</span>
                    </div>
                  </Tooltip>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        {localSelecionado && (
          <ModalHistorico 
            local={localSelecionado} 
            onClose={() => setLocalSelecionado(null)} 
          />
        )}
      </div>
      <Footer />
    </>
  );
}