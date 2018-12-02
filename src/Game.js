import React, { Component } from 'react';
const equipes = ['Equipe1','Equipe2','Equipe3','Equipe4'] ;
const equipe1 = 'Equipe1';
const equipe2 = 'Equipe2';
const equipe3 = 'Equipe3';
const equipe4 = 'Equipe4';

let sorteio1 = '';
let sorteio2 = '';

class Game extends Component {
    render() {
        return (
            <div>
                <DivGame />
            </div>
        )
    }
}

class DivGame extends React.Component {
    constructor(props) {
        super(props);
        this.Play = this.Play.bind(this);
    }

    Play(){
        alert("Usar o Console do Navegador!")
        this.Equipes();
        this.Sorteio();
        this.Jogo();
    }

    render(){
        return (            
            <button onClick={this.Play}>
                Play
            </button>
        );
    }

    Equipes() {
        console.log("Equipes:")
        for(var eq in equipes){
            console.log(equipes[eq]);
        }
        return true
    }

    Sorteio(){
        console.log("Sorteio:")
        let sort = Math.floor(Math.random() * (3 - 1 + 1) + 1);//Equipe4 vai jogar com?
        switch (sort){
            case 1:
                sorteio1 = [equipe1,equipe4];
                sorteio2 = [equipe2,equipe3];
                console.log("Sorteio1: " + sorteio1.toString());
                console.log("Sorteio2: " + sorteio2.toString());
            break;
            case 2:
                sorteio1 = [equipe2,equipe4];
                sorteio2 = [equipe1,equipe3];
                console.log("Sorteio1: " + sorteio1.toString());
                console.log("Sorteio2: " + sorteio2.toString());
            break;
            case 3:
                sorteio1 = [equipe3,equipe4];
                sorteio2 = [equipe1,equipe2];
                console.log("Sorteio1: " + sorteio1.toString());
                console.log("Sorteio2: " + sorteio2.toString());
            break;
            default:
            break;
        }
        return true;
    }

    Jogo(){
        console.log("Jogo:");
        console.log(sorteio1.toString());
        console.log("Rotada1:");
        let Rotada1 = Math.floor(Math.random() * 2);
        for(var eq in sorteio1){
            if(eq === Rotada1){
                console.log("Venceu: " + sorteio1[eq]);
            }
        }

        console.log("Rotada2:");
        let Rotada2 = Math.floor(Math.random() * 2);
        for(var eq in sorteio1){
            if(eq === Rotada2){
                console.log("Venceu: " + sorteio1[eq]);
            }
        }

        console.log("Rotada3:");
        let Rotada3 = Math.floor(Math.random() * 2);
        for(var eq in sorteio1){
            if(eq === Rotada3){
                console.log("Venceu: " + sorteio1[eq]);
            }
        }

        return true;
    }
}

export default Game;