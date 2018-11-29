import React, { Component } from 'react';

class Arena extends Component {
    render() {

        return (
            <div>
                <CadastroArena />
            </div>
        )
    }
}

class CadastroArena extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'arena-nome' );
        const arena = document.getElementById ( 'arena-categoria' );
        
        fetch('http://127.0.0.1:8080/arena', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "categoria":categoria.value
            })
        })
    }

    render(){
        return (
            <form id="arena-form">
                <label>Arena:</label>
                <input
                    id="arena-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>Categoria:</label>
                <input
                    id="arena-categoria"
                    type="text"
                    name="categoria"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

export default Arena;