import React, { Component } from 'react';
import './App.css';

const mock = [
    {name: 'Bulbasur', url: 'bulbasur.com'},
    {name: 'Charmander', url: 'charmander.com'},
    {name: 'Squirtle', url: 'squirtle.com'}
]

class App extends Component {

    constructor(props){
        super(props);
    }

    selectPokemon(name){

    }
    render (){
        return (
            <p>Estamos empezando</p>
        )
    }

}

export default App;
