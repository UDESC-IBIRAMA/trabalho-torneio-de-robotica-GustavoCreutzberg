import React, { Component } from 'react';

class Competicao extends Component {
    render() {

        return (
            <div>
                <CadastroCompeticao />
            </div>
        )
    }
}

class CadastroCompeticao extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const cidade = document.getElementById ( 'competicao-cidade' );
        const estado = document.getElementById ( 'competicao-estado' );
        const data = document.getElementById ( 'competicao-data' );
        const responsavel = document.getElementById ( 'competicao-responsavel' );
        const tipo = document.getElementById ( 'competicao-tipo' );
        const temporada = document.getElementById ( 'competicao-temporada' );

        fetch('http://127.0.0.1:8080/competicao', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "cidade":cidade.value,
                "estado":estado.value,
                "data":data.value,
                "responsavel":responsavel.value,
                "tipo":tipo.value,
                "temporada":temporada.value
            })
        })
    }

    render(){
        return (
            
            <form id="competicao-form">
                <label>Cidade:</label>
                <input
                    id="competicao-cidade"
                    type="text"
                    name="cidade"
                />
                <br/>
                <label>Estado:</label>
                <input
                    id="competicao-estado"
                    type="text"
                    name="estado"
                />
                <br/>
                <label>Data:</label>
                <input
                    id="competicao-data"
                    type="text"
                    name="data"
                />
                <br/>
                <label>Responsável:</label>
                <input
                    id="competicao-responsavel"
                    type="text"
                    name="responsavel"
                />
                <br/>
                <label>Tipo:</label>
                <input
                    id="competicao-tipo"
                    type="text"
                    name="tipo"
                />
                <br/>
                <label>Temporada:</label>
                <input
                    id="competicao-temporada"
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

export default Competicao;