import "./Destaques.css"
import { FaHeadphonesSimple } from "react-icons/fa6"
import { RiGraduationCapFill } from "react-icons/ri"

export default function Destaques() {
  return(
      <section className="destaques">
        <h2>Destaques</h2>
        <div className="destaques-item">
            <div className="icone-quad icone-verde">
                <FaHeadphonesSimple />
            </div>
            <div className="destaques-texto">
                <h3 className="subtitulo-verde">Áudios narrados por crianças</h3>
                <p>Histórias contadas com nossas vozes e muito carinho.</p>    
            </div>
        </div>

        <div className="destaques-item">
            <div className="icone-quad icone-azul">
                <RiGraduationCapFill />
            </div>

            <div className="destaques-texto">
                <h3 className="subtitulo-azul">Feito por alunos do 8° ano B</h3>
                <p>Pesquisa, tecnologia e criatividade a serviço da nossa cidade.</p>
            </div>
        </div>
      </section>
  )
}
