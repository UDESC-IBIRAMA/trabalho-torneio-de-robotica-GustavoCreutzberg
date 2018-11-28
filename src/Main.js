import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Produto from "./Produto";
import Pessoa from "./Pessoa";

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produtos' component={Produto} />
                <Route path='/pessoas' component={Pessoa} />
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