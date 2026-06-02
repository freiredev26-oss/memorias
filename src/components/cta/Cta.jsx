import "./Cta.css"
import { IoCameraOutline } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"

export default function CTA() {
    return (
        <section className="cta">
            <div className="cta-conteudo">
                <div className="icone-camera">
                    <IoCameraOutline />
                </div>

                <div className="cta-textos">
                    <h2>Tem fotos ou histórias para compartilhar?</h2>
                    <h3>Ajude a manter viva a memória da nossa cidade!</h3>
                </div>
            </div>

            <button className="cta-botao">
                Enviar contribuição <FaArrowRight /> 
            </button>
        </section>
    )
}
