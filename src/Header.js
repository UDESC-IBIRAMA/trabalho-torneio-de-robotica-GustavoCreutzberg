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
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;