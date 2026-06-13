import { FaPrint } from "react-icons/fa";

export default function CardImpressao({ paraImprimir }) {
  return (
    <div className="coluna-recurso card-impressao">
      <div className="recurso-title">
        <FaPrint className="icon-recurso text-blue" />
        <h3>Atividades para Imprimir</h3>
      </div>
      <p className="recurso-desc">
        Folhas de colorir, cruzadinhas, caça-palavras e conteúdos comemorativos em formato PDF:
      </p>
      
      <div className="lista-downloads">
        {paraImprimir.map((doc) => (
          <div key={doc.id} className="item-download">
            <div className="doc-info">
              <span className="doc-type">{doc.tipo}</span>
              <h4>{doc.titulo}</h4>
            </div>
            <a href={doc.url} target="_blank" rel="noreferrer" className="btn-print">
              <FaPrint /> Imprimir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
