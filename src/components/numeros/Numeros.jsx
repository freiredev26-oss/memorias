import './Numeros.css'
import { PiTreeFill } from 'react-icons/pi'
import IconMs from "/src/assets/images/ms.png"
import { FaPeopleGroup } from 'react-icons/fa6'
import logoTerere from "/src/assets/images/terere.png"
import logoMs from "/src/assets/images/msIcon.png"

export default function Numeros(){
    return(
        <section className='numeros'>
            <div className='conteudo-numeros'>
                <h2>Campo Grande em números</h2>

                <div className='numeros-grid'>
                    <div className='numero-card'>
                        <div className='quadrado img-azul'>
                            <PiTreeFill />
                        </div>
                        <div className='texto-cartao'>
                            <p>Fundada em</p>
                            <h3>26 de agosto de 1899</h3>
                        </div>
                    </div>

                    <div className='numero-card'>
                        <div className='quadrado img-verde'>
                            <img src={IconMs} alt="Icone de MS" className='img-icone'/>
                        </div>
                        <div className='texto-cartao'>
                            <p>Capital de</p>
                            <h3>Mato Grosso do Sul</h3>
                        </div>
                    </div>

                    <div className='numero-card'>
                        <div className='quadrado img-amarelo'>
                           <FaPeopleGroup />
                        </div>
                        <div className='texto-cartao'>
                            <p>Mais de</p>
                            <h3>962 mil habitantes</h3>
                        </div>
                    </div>

                    <div className='numero-card'>
                        <div className='quadrado img-azul'>
                            <img src={logoTerere} alt="Icone tereré" className='img-icone'/>
                        </div>
                        <div className='texto-cartao'>
                            <p>Cidade Morena e capital do</p>
                            <h3>Tereré</h3>
                        </div>
                    </div>
                </div>
            </div>

            <img src={logoMs} alt="mapa de MS" className='mapa-logo'/>
        </section>
    )
}