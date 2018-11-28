import React, { Component } from 'react';

class Produto extends Component {
    render() {

        return (
            <div>
                <CadastroProduto />
                <ListaProduto />
            </div>
        )
    }
}

class CadastroProduto extends React.Component {
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

        const nome = document.getElementById ( 'produto-nome' );
        const und = document.getElementById ( 'produto-und' );
        const preco = document.getElementById ( 'produto-preco' );
        fetch('http://127.0.0.1:8080/produtos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":nome.value,
                "unidmed":und.value,
                "preco":preco.value
            })
        })
    }
    render(){
        return (
            <form id="produto-form">
                <label>Produto:</label>
                <input
                    id="produto-nome"
                    type="text"
                    name="nome"
                />
                <br/>
                <label>unidade de medida:</label>
                <input
                    id="produto-und"
                    type="text"
                    name="unidmed"
                />
                <br/>
                <label>Preço:</label>
                <input
                    id="produto-preco"
                    type="numeric"
                    name="preco"
                />
                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>

        )
    }
}

class ListaProduto extends React.Component {
    render(){
        return (
            <table><tr><td>nenhum</td></tr></table>
        )
    }
}
export default Produto;