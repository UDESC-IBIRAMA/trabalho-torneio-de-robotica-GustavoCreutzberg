import React, { Component } from 'react';

class Equipe extends Component {
    render() {

        return (
            <div>
                <CadastroEquipe />
            </div>
        )
    }
}

class CadastroEquipe extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'equipe-nome' );
        const integrantes = document.getElementById ( 'equipe-integrantes' );
        const competicao = document.getElementById ( 'equipe-competicao' );
        fetch('http://127.0.0.1:8080/equipe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "integrantes":integrantes.value,
                "competicao":competicao.value
            })
        })
    }

    render(){
        return (
            <form id="equipe-form">
                <label>Equipe:</label>
                <input
                    id="equipe-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>Integrantes:</label>
                <input
                    id="equipe-integrantes"
                    type="text"
                    name="integrantes"
                />
                <br/>
                <label>Competição:</label>
                <input
                    id="equipe-competicao"
                    type="text"
                    name="competicao"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

export default Equipe;