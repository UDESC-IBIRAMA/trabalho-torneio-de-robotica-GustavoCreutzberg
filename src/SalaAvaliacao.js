import React, { Component } from 'react';

class SalaAvaliacao extends Component {
    render() {

        return (
            <div>
                <CadastroSalaAvaliacao />
            </div>
        )
    }
}

class CadastroSalaAvaliacao extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'salaavaliacao-nome' );
        const competicao = document.getElementById ( 'salaavaliacao-competicao' );
        const categoria = document.getElementById ( 'salaavaliacao-categoria' );
        
        fetch('http://127.0.0.1:8080/salaavaliacao', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "competicao":competicao.value,
                "categoria":categoria.value
            })
        })
    }

    render(){
        return (
            <form id="salaavaliacao-form">
                <label>Nome:</label>
                <input
                    id="salaavaliacao-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>Competição:</label>
                <input
                    id="salaavaliacao-competicao"
                    type="text"
                    name="competicao"
                />
                <br/>
                <label>Categoria:</label>
                <input
                    id="salaavaliacao-categoria"
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

export default SalaAvaliacao;