import "./Footer.css";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import brasao from "/src/assets/images/brasao.png";
import bandeira from "/src/assets/images/bandeira.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <img src={brasao} alt="Brasão de Campo Grande" className="footer-logo" />
          <div className="brand-text">
            <h2>Memórias de Campo Grande</h2>
            <p className="subtitle">Crianças apresentam a cidade</p>
            <p className="school-info">E.M. Abel Freire de Aragão</p>
            <p className="school-info">Campo Grande - MS</p>
          </div>
        </div>

        <div className="footer-nav">
          <h3>Navegação</h3>
          <div className="nav-links-grid">
            <div className="nav-col">
              <a href="/">Início</a>
              <a href="/roteiros">Roteiros</a>
              <a href="/atividades">Atividades</a>
            </div>
            <div className="nav-col">
              <a href="/sobre">Sobre</a>
              <a href="/equipe">Equipe</a>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/escolaabelfreire/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/escolaabel" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://github.com/freiredev26-oss" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          <p className="texto">
            Desenvolvido com <span className="heart">🧡</span> por alunos do 8º ano B
          </p>
        </div>

        <div className="footer-qrcode-card">
          <div className="qrcode-placeholder">
            <div className="qr-box"></div> 
          </div>
          <p>Escaneie e comece seu roteiro agora!</p>
        </div>

      </div>

      <div className="baixo">
        <p>© 2026 Memórias de Campo Grande. Todos os direitos reservados.</p>
        <img src={bandeira} alt="Bandeira" className="bandeira" />
      </div>
    </footer>
  );
}

export default Footer;