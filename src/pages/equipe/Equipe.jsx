import "./Equipe.css";
import { teamMembers } from "/src/data/teamData";
import Footer from "/src/components/footer/Footer"
import { FaGraduationCap, FaCode, FaUserCircle, FaGithub, FaLinkedin, FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Equipe() {
  return (
    <>
        <div className="equipe-container">
            <header className="equipe-header">
                <h1>Nossa Equipe</h1>
                <p className="subtitle">
                Conheça as mentes e as mãos por trás do projeto <strong>Memórias de Campo Grande</strong>.
                </p>
            </header>

            <section className="equipe-grid">
                {teamMembers.map((membro, index) => (
                <div key={index} className="membro-card">
                    
                    <div className="avatar-placeholder">
                    {membro.image ? (
                        <img src={membro.image} alt={`Foto de ${membro.nome}`} className="member-photo" />
                    ) : (
                        <FaUserCircle size={80} className="default-avatar" />
                    )}
                    </div>
                    
                    <div className="card-body">
                    <span className="member-tag">{membro.tag}</span>
                    <h2>{membro.nome}</h2>
                    
                    <div className="member-title">
                        {membro.tipoIcone === "aluno" ? (
                        <FaGraduationCap className="card-icon-student" />
                        ) : (
                        <FaCode className="card-icon-teacher" />
                        )}
                        <span>{membro.titulo}</span>
                    </div>
                    
                    <p>{membro.bio}</p>

                    {membro.links && (
                        <div className="member-social-links">
                        {membro.links.github && (
                            <a href={membro.links.github} target="_blank" rel="noreferrer" title="Ver GitHub">
                            <FaGithub />
                            </a>
                        )}
                        {membro.links.linkedin && (
                            <a href={membro.links.linkedin} target="_blank" rel="noreferrer" title="Ver LinkedIn">
                            <FaLinkedin />
                            </a>
                        )}
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </section>

            <section className="quem-somos-section">
                <h2>Quem Somos</h2>
                <p>
                Nossa equipe é formada por alunos talentosos do <strong>8º Ano B (Turno Vespertino)</strong> da 
                <strong> Escola Municipal Abel Freire de Aragão</strong>, localizada em Campo Grande - MS. 
                Sob a orientação de Gabriela e do professor Luís, estamos unindo tecnologia, patrimônio 
                cultural e criatividade para reescrever e preservar a história da nossa cidade em linhas de código.
                </p>
                <p>
                Com exceção do aluno Mauro, que trilha o caminho do desenvolvimento de software desde 2023 e atua como um pilar de apoio 
                para o grupo, toda a turma iniciou suas jornadas no universo tecnológico em 2025. Juntos, estamos comprometidos em 
                entregar uma plataforma interativa e acessível para toda a comunidade sul-mato-grossense.
                </p>
            </section>

            <section className="project-repo-section">
                <h3>Gostou da nossa iniciativa?</h3>
                <p>Todo o código-fonte deste site é aberto e foi criado pelos próprios alunos. Venha conferir nossa evolução!</p>
                <a href="https://github.com/freiredev26-oss/memorias" target="_blank" rel="noreferrer" className="btn-github-repo">
                <FaGithub /> Ver Código no GitHub
                </a>
            </section>

            <section className="tech-section">
                <h4>Tecnologias que estamos aprendendo e usando:</h4>
                <div className="tech-icons">
                <div className="tech-box" title="HTML5"><FaHtml5 className="icon-html" /><span>HTML5</span></div>
                <div className="tech-box" title="CSS3"><FaCss3Alt className="icon-css" /><span>CSS3</span></div>
                <div className="tech-box" title="JavaScript"><FaJs className="icon-js" /><span>JavaScript</span></div>
                <div className="tech-box" title="React"><FaReact className="icon-react" /><span>React</span></div>
                </div>
            </section>
        </div>
            <Footer />
    </>
  );
}
