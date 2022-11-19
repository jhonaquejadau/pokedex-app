import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const PokemonWeakness = ({pokemons, name, setPokemons}) => {

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

    const handleFilterTypes = (type) => {
        const pokemonFiltered = pokemons.pokemon.filter(pokemon => pokemon.types.some(pokemonType => pokemonType.type.name === type))
            setPokemons(() => {
            return {
                pokemon: pokemons.pokemon, 
                array: pokemonFiltered
            }
        })
    }

    // MAPPING POKEMON WEAKNESS
    const pokemonWeaknessDiv = [...new Set(pokemonWeakness)].map((weakness, index) => {
        return (
            <Link to="/pokedex">
                <div 
                    key={index+1} 
                    className={`${weakness.name} rounded-xl w-[5em] text-center text-slate-100 cursor-pointer`}
                    onClick={() => handleFilterTypes(weakness.name)}
                >
                        {weakness.name}
                </div>
            </Link>
        )
    })
    
    return (
        <div className="grid grid-cols-3 items-center gap-2 p-2 border-2 max-[450px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 2xl:flex 2xl:flex-row">
            {pokemonWeaknessDiv}
        </div>
    )
};