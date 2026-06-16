import logoCidade from '/src/assets/images/logo.png'
import { FaHome, FaQuestionCircle, FaUsers } from 'react-icons/fa'
import { MdQuiz } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return(
        <nav className='navbar'>
            <div className='brand-container'>
                <img src={logoCidade} alt="Logo campo grande" className='navbar-logo'/>
                <div className='logo-texto'>
                    <h2 className='titulo1'>Memórias de</h2>
                    <h1>Campo Grande</h1>
                    <h3>Alunos da Abel apresentam a cidade</h3>
                </div>
            </div>

            <div className='nav-links'>
                <NavLink to="/">
                    <FaHome />
                    <span>Início</span>
                </NavLink>
                <NavLink to="/atividades">
                    <MdQuiz />
                    <span>Atividades</span>
                </NavLink>
                <NavLink to="/sobre">
                    <FaQuestionCircle />
                    <span>Sobre</span>
                </NavLink>
                <NavLink to="/equipe">
                    <FaUsers />
                    <span>Equipe</span>
                </NavLink>
            </div>
        </nav>
    )
}
