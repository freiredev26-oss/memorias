import "./Sobre.css";
import { FaBookOpen, FaCode, FaMapMarkedAlt, FaAward } from "react-icons/fa";

function Sobre() {
  return (
    <div className="sobre-caixa">
      <header className="sobre-cabecalho">
        <h1>Sobre o Projeto</h1>
        <p className="subtitulo">
          Como os alunos do 8º ano B estão transformando a história de Campo Grande através de linhas de código.
        </p>
      </header>

      <section className="sobre-secao introducao">
        <div className="sobre-texto-bloco">
          <h2>Nossa Missão</h2>
          <p>
            O projeto <strong>"Memórias de Campo Grande: Crianças apresentam a cidade"</strong> nasceu da união de duas grandes necessidades: 
            a introdução prática e profissionalizante à Engenharia de Software para adolescentes e a escassez de recursos didáticos 
            interativos sobre a <strong>História Regional de Mato Grosso do Sul</strong> voltados para as séries iniciais do Ensino Fundamental.
          </p>
          <p>
            Identificamos que os livros tradicionais muitas vezes não acompanham o dinamismo tecnológico que as crianças das séries iniciais 
            consomem hoje. Nossa resposta foi colocar os estudantes da <strong>E.M. Abel Freire de Aragão</strong> no papel de protagonistas: eles pesquisam, 
            coletam memórias locais, estruturam roteiros históricos e codificam esta plataforma interativa em React para servir de apoio pedagógico gratuito 
            para outros professores e alunos da rede municipal.
          </p>
        </div>
        <div className="sobre-caixa-destaque">
          <h3>O Problema que Resolvemos</h3>
          <p className="problema">
            "A falta de material didático digital e interativo de história regional focado na realidade local de Campo Grande, 
            especialmente para os anos iniciais."
          </p>
          <div className="solucao-tag">Nossa Solução: Tecnologia feita por alunos para alunos.</div>
        </div>
      </section>

      <section className="sobre-secao eixos-section">
        <h2 className="secao-titulo-central">Os Pilares de Desenvolvimento</h2>
        <p className="secao-subtitulo-central">Como o ecossistema do projeto foi estruturado pela turma:</p>
        
        <div className="eixos-grade">
          <div className="eixo-cartao">
            <div className="eixo-icone-parede circulo-azul">
              <FaBookOpen />
            </div>
            <h3>Pesquisa Histórica</h3>
            <p>Curadoria rigorosa de conteúdo sob orientação historiográfica, resgatando a memória do entorno da escola e pontos culturais marcantes da cidade.</p>
          </div>

          <div className="eixo-cartao">
            <div className="eixo-icone-parede circulo-verde">
              <FaCode />
            </div>
            <h3>Engenharia de Software</h3>
            <p>Desenvolvimento em React utilizando Vite, conceitos de componentização, versionamento e deploy de interfaces responsivas e acessíveis.</p>
          </div>

          <div className="eixo-cartao">
            <div className="eixo-icone-parede circulo-amarelo">
              <FaMapMarkedAlt />
            </div>
            <h3>City Tour Autoguiado</h3>
            <p>Integração do ambiente digital com o físico por meio de QR Codes, permitindo uma imersão cultural em formato de caça ao tesouro e quizzes interativos.</p>
          </div>
        </div>
      </section>

      <section className="sobre-secao metas-caixas">
        <div className="metas-conteudo">
          <h2>Voando Alto</h2>
          <p>
            Mais do que uma ferramenta interna de aprendizado, o projeto foi validado e estruturado seguindo os critérios de grandes competições de inovação e relevância científica juvenil:
          </p>
          <ul className="metas-lista">
            <li>
              <FaAward className="metas-lista-icone" /> 
              <span><strong>Desafio Liga Jovem SEBRAE:</strong> Solução empreendedora de impacto social e educacional na comunidade.</span>
            </li>
            <li>
              <FaAward className="metas-lista-icone" /> 
              <span><strong>FECIT REME 2026:</strong> Exposição científica e apresentação do Pitch tecnológico oficial para toda a rede municipal de ensino.</span>
            </li>
            <li>
              <FaAward className="metas-lista-icone" /> 
              <span><strong>Recurso Permanente:</strong> Disponibilização de uma plataforma ativa para auxiliar os professores do município no ensino de história regional de forma lúdica.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Sobre;