import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const PokemonWeakness = ({pokemons, name}) => {

    const filterPokemon = pokemons.pokemon && pokemons.pokemon.filter(pokemon => pokemon.name === name)
    const pokemon = filterPokemon[0]

    const [pokemonWeakness, setPokemonWeakness] = useState([])


    // FETCHING POKEMON WEAKNESS
    async function getPokemonWeakness() {
    
        for (let i = 0; i < pokemon.types.length; i++) {
            const response2 = await fetch(`https://pokeapi.co/api/v2/type/${pokemon.types[i].type.name}/`);
            const Weakness = await response2.json();

            setPokemonWeakness((prevPokemonWeakness) => [
              ...prevPokemonWeakness,
              ...Weakness.damage_relations.double_damage_from
            ]);
        }
    }

    useEffect(() => {
        getPokemonWeakness()
    }, [])

    // MAPPING POKEMON WEAKNESS
    const pokemonWeaknessDiv = [...new Set(pokemonWeakness)].map((weakness, index) => {
        return (
            <div key={index+1} className={`${weakness.name} rounded-xl w-[5em] text-center text-slate-100`}>{weakness.name}</div>
        )
    })
    
    return (
        <div className="grid grid-cols-3 items-center gap-2 p-2 border-2 max-[450px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 2xl:flex 2xl:flex-row">
            {pokemonWeaknessDiv}
        </div>
    )
};