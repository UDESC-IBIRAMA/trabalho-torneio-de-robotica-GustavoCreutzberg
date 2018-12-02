import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    
    render() {
        return (
            <header>
                <nav id="menu">
                    <ul>
                        <li><Link exact to='/'>Home</Link></li>
                        <li><Link to='/Equipes'>Cadastros de Equipes</Link></li>
                        <li><Link to='/Integrante'>Cadastros de Integrante</Link></li>
                        <li><Link to='/Juiz'>Cadastros de Juiz</Link></li>
                        <li><Link to='/Temporada'>Cadastros de Temporada</Link></li>
                        <li><Link to='/Arena'>Cadastros de Arena</Link></li>
                        <li><Link to='/Competicao'>Cadastros de Competição</Link></li>
                        <li><Link to='/SalaAvaliacao'>Cadastros de Sala de Avaliação</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;