import React, { Component } from 'react';

class Integrante extends Component {
    render() {

        return (
            <div>
                <CadastroIntegrante />
            </div>
        )
    }
}

class CadastroIntegrante extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        const nome = document.getElementById ( 'integrante-nome' );
        const rg = document.getElementById ( 'integrante-rg' );
        const cpf = document.getElementById ( 'integrante-cpf' );
        const nascimento = document.getElementById ( 'integrante-nascimento' );
        const pai = document.getElementById ( 'integrante-pai' );
        const mae = document.getElementById ( 'integrante-mae' );
        const autorizacao = document.getElementById ( 'integrante-autorizacao' );

        fetch('http://127.0.0.1:8080/integrante', {
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
                "pai":pai.value,
                "mae":mae.value,
                "autorizacao":autorizacao.value    
            })
        })
    }

    render(){
        return (
            <form id="integrante-form">
                <label>Integrante:</label>
                <input
                    id="integrante-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>RG:</label>
                <input
                    id="integrante-rg"
                    type="text"
                    name="rg"
                />
                <br/>
                <label>CPF:</label>
                <input
                    id="integrante-cpf"
                    type="text"
                    name="cpf"
                />
                <br/>
                <label>Data Nascimento:</label>
                <input
                    id="integrante-nascimento"
                    type="text"
                    name="nascimento"
                />
                <br/>
                <label>Pai:</label>
                <input
                    id="integrante-pai"
                    type="text"
                    name="pai"
                />
                <br/>
                <label>Mãe:</label>
                <input
                    id="integrante-mae"
                    type="text"
                    name="mae"
                />
                <br/>
                <label>Autorização entregue:</label>
                <input
                    id="integrante-autorizacao"
                    type="text"
                    name="autorizacao"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

export default Integrante;