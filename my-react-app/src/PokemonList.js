// PokemonList.js
import React, { useState, useEffect } from 'react';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
            });
    }, []);

    if (pokemonList.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>Lista de Pokémon:</h2>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;
