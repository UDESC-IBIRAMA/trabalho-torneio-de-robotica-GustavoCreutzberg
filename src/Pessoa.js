import React, { Component } from 'react';

class Pessoa extends Component {
    render() {

        return (
            <div>
                <CadastroPessoa />
                <ListaPessoa />
            </div>
        )
    }
}

class CadastroPessoa extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){
        // const form = FormData(document.getElementById ( 'produto-form' ));
        // console.log(form);
        // const lista = fetch('http://127.0.0.1:8080/produtos', {
        //     method: 'POST',
        //     Body:form
        // })

        const nome = document.getElementById ( 'pessoa-nome' );
        const idade = document.getElementById ( 'pessoa-idade' );
        const altura = document.getElementById ( 'pessoa-altura' );
        fetch('http://127.0.0.1:8080/pessoas', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "idade":idade.value,
                "altura":altura.value
            })
        })
    }
    render(){
        return (
            <form id="pessoa-form">
                <label>Nome:</label>
                <input
                    id="pessoa-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>idade:</label>
                <input
                    id="pessoa-idade"
                    type="numeric"
                    name="idade"
                />
                <br/>
                <label>Altura:</label>
                <input
                    id="pessoa-altura"
                    type="numeric"
                    name="altura"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

class ListaPessoa extends React.Component {
    render(){
        return (
            <table><tr><td>nenhum</td></tr></table>
        )
    }
}
export default Pessoa;