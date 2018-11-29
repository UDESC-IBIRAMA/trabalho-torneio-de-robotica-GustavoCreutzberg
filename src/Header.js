import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link exact to='/'>Home</Link></li>
                        <li><Link to='/produtos'>cadastros de Produtos</Link></li>
                        <li><Link to='/Pessoas'>Cadastros de Pessoas</Link></li>
                        <li><Link to='/Equipes'>Cadastros de Equipes</Link></li>
                        <li><Link to='/Integrante'>Cadastros de Integrante</Link></li>
                        <li><Link to='/Juiz'>Cadastros de Juiz</Link></li>
                        <li><Link to='/Temporada'>Cadastros de Temporada</Link></li>
                        <li><Link to='/Arena'>Cadastros de Arena</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;