import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Produto from "./Produto";
import Pessoa from "./Pessoa";
import Equipe from "./Equipe";

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produtos' component={Produto} />
                <Route path='/pessoas' component={Pessoa} />
                <Route path='/equipes' component={Equipe} />
            </Switch>
        )
    }
}
const Home = () => (
    <div>
        <h1>Bem vindo ao sistema!</h1>
    </div>
)

export default Principal;