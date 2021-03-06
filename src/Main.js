import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Equipe from "./Equipe";
import Integrante from './Integrante';
import Juiz from './Juiz';
import Temporada from './Temporada';
import Arena from './Arena';
import Competicao from './Competicao';
import SalaAvaliacao from './SalaAvaliacao';
import Game from './Game';

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/equipes' component={Equipe} />
                <Route path='/integrante' component={Integrante} />
                <Route path='/juiz' component={Juiz} />
                <Route path='/temporada' component={Temporada} />
                <Route path='/arena' component={Arena} />
                <Route path='/competicao' component={Competicao} />
                <Route path='/salaavaliacao' component={SalaAvaliacao} />
                <Route path='/Game' component={Game} />
            </Switch>
        )
    }
}
const Home = () => (
    <div>
        <h1>Trabalho de Competiçao de Robotica!</h1>
        <h5>Por Kleiton Bonin e Gustavo Roger Creutzberg</h5>
    </div>
)

export default Principal;