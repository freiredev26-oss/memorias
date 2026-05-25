import logoCidade from '/src/assets/images/logo.png'
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
                Início
                </NavLink>
                <NavLink to="/atividades">
                Atividades
                </NavLink>
                <NavLink to="/sobre">
                Sobre
                </NavLink>
                <NavLink to="/equipe">
                Equipe
                </NavLink>
            </div>
        </nav>
    )
}
