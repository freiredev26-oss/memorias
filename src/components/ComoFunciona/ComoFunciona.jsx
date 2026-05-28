import "./ComoFunciona.css"
import { BsQrCode } from "react-icons/bs" 
import { RiGraduationCapFill } from "react-icons/ri"

export default function ComoFunciona() {
  return(
      <section className="como">
        <h2>Como funciona</h2>
        <div className="passos">
            <div className="icone-quad icone-verde">
                <div className="icone-circulo icone-azul">
                    <BsQrCode />
                </div>
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
