// MyApp.js
import React from 'react';
import EnderecoComponent from './EnderecoComponent'; // Importe o componente aqui
import PokemonInfo from './PokemonInfo';
import PokemonList from './PokemonList';


function MyApp() {
    return (
        <div>
            <h1>Consumindo API de Endereço</h1>
            <EnderecoComponent />
            <h1>Consumindo Api de Pokemon</h1>         
            <PokemonInfo pokemonNumber={25} /> 
            <h1>API de listagem de pokemons</h1>
            <PokemonList />
        </div>
    );
}

export default MyApp;
