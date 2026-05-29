import { BsQrCode } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaTrophy } from "react-icons/fa";
import { RiArrowRightLongLine } from "react-icons/ri";
import "./ComoFunciona.css";

function HowItWorks() {
  return (
    <section className="como">
      <h2>Como funciona</h2>

      <div className="passos">
        <div className="passo">
          <div className="icone-circulo icone-azul">
            <BsQrCode />
          </div>
          <h3 className="numero1">1</h3>
          <p>Escaneie o QR Code</p>
        </div>

        <div className="passo-seta">
          <RiArrowRightLongLine />
        </div>

        <div className="passo">
          <div className="icone-circulo icone-verde">
            <CiLocationOn />
          </div>
          <h3 className="numero2">2</h3>
          <p>Explore os conteúdos</p>
        </div>

        <div className="passo-seta">
          <RiArrowRightLongLine />
        </div>

        <div className="passo">
          <div className="icone-circulo icone-amarelo">
            <FaTrophy />
          </div>
          <h3 className="numero3">3</h3>
          <p>Responda os quizzes</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;