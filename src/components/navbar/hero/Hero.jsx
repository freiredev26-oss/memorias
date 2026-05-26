import "./Hero.css"
import bgHero from "./campoGrande1.webp"
import Capy from "/src/assets/images/capi1.png"
import Onda from "/src/assets/images/wave.png"
import Ipe from "/src/assets/images/ipe.png"

export default function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className="hero-content">
                <h1>Nossa história. <br /> 
                    Nossa cidade. <br />
                    <span>Nosso futuro.</span>
                </h1>
                <div className="hero-paragrafo-div">
                    <p>Um tour interativo para conhecer os lugares, as pessoas e as memórias que fazem de Campo Grande um lugar especial.</p>
                </div>
            </div>
            <div>
            <img src={Capy} className="capy"/>
            <img src={Onda} className="onda"/>
            <img src={Ipe} className="ipe"/>
            </div>
        </section>
    )
}