import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Produto from "./Produto";
import Pessoa from "./Pessoa";
import Equipe from "./Equipe";
import Integrante from './Integrante';
import Juiz from './Juiz';
import Temporada from './Temporada';
import Arena from './Arena';

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produtos' component={Produto} />
                <Route path='/pessoas' component={Pessoa} />
                <Route path='/equipes' component={Equipe} />
                <Route path='/integrante' component={Integrante} />
                <Route path='/juiz' component={Juiz} />
                <Route path='/temporada' component={Temporada} />
                <Route path='/arena' component={Arena} />
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