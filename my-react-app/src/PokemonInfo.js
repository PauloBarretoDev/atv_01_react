// PokemonInfo.js
import React, { useState, useEffect } from 'react';

function PokemonInfo({ pokemonNumber }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
            });
    }, [pokemonNumber]);

    if (!pokemonData) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>Informações do Pokémon:</h2>
            <p>Número: {pokemonData.id}</p>
            <p>Nome: {pokemonData.name}</p>
            <p>Altura: {pokemonData.height / 10} metros</p>
            <p>Peso: {pokemonData.weight / 10} kg</p>
        </div>
    );
}

export default PokemonInfo;
