import React, { Component } from 'react';

class Temporada extends Component {
    render() {

        return (
            <div>
                <CadastroTemporada />
            </div>
        )
    }
}

class CadastroTemporada extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'temporada-nome' );
        const descricao = document.getElementById ( 'temporada-descricao' );
        
        fetch('http://127.0.0.1:8080/temporadas', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "descricao":descricao.value
            })
        })
    }

    render(){
        return (
            <form id="temporada-form">
                <label>Temporada:</label>
                <input
                    id="temporada-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>Descrição:</label>
                <input
                    id="temporada-temporada"
                    type="text"
                    name="temporada"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

export default Temporada;