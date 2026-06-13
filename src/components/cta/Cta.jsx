import "./Cta.css"
import { IoCameraOutline } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"

export default function CTA() {
    const telefone = "5567984821570";
    
    const mensagem = "Olá! Gostaria de enviar uma contribuição para o projeto.\n\n" +
                     "Local:\n" +
                     "História:\n" +
                     "Fotos:\n" +
                     "Outros detalhes:";

    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    const handleClique = () => {
        window.open(urlWhatsapp, "_blank", "noopener,noreferrer");
    };

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

            <button className="cta-botao" onClick={handleClique}>
                Enviar contribuição <FaArrowRight /> 
            </button>
        </section>
    );
}