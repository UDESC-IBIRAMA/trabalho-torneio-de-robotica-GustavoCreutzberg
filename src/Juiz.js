import React, { Component } from 'react';

class Juiz extends Component {
    render() {

        return (
            <div>
                <CadastroJuiz />
            </div>
        )
    }
}

class CadastroJuiz extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'juiz-nome' );
        const rg = document.getElementById ( 'juiz-rg' );
        const cpf = document.getElementById ( 'juiz-cpf' );
        const nascimento = document.getElementById ( 'juiz-nascimento' );
        const categoria = document.getElementById ( 'juiz-categoria' );

        fetch('http://127.0.0.1:8080/juiz', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "rg":rg.value,
                "cpf":cpf.value,
                "nascimento":nascimento.value,
                "categoria":categoria.value
            })
        })
    }

    render(){
        return (
            <form id="juiz-form">
                <label>Juiz:</label>
                <input
                    id="juiz-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>RG:</label>
                <input
                    id="juiz-rg"
                    type="text"
                    name="rg"
                />
                <br/>
                <label>CPF:</label>
                <input
                    id="juiz-cpf"
                    type="text"
                    name="cpf"
                />
                <br/>
                <label>Data Nascimento:</label>
                <input
                    id="juiz-nascimento"
                    type="text"
                    name="nascimento"
                />
                <br/>
                <label>Categoria:</label>
                <input
                    id="juiz-categoria"
                    type="text"
                    name="pai"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

export default Juiz;