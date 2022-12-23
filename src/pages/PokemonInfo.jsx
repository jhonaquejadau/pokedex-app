import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

import { Pokeball } from "../components/Pokeball";
import { PokemonStats } from "../components/pokemon-info/PokemonStats";

import { PokemonEvolutions } from "../components/pokemon-info/PokemonEvolution";
import { PokemonWeakness } from "../components/pokemon-info/PokemonWeakness";
import {AiOutlineClose} from "react-icons/ai"

export const PokemonInfo = ({pokemons, setPokemons}) => {
    const {name} = useParams();
    const [pokemonSpecies, setPokemonSpecies] = useState({});
    const filterPokemon = pokemons.pokemon.length > 0 && pokemons.pokemon.filter(pokemon => pokemon.name === name);
    const pokemon = pokemons.change ? pokemons.change[0] : filterPokemon[0];
    const id = pokemon && pokemon.id

    //FETCHING POKEMON SPECIES
    
    async function getEvolutions () {
        const getPokemonSpecies = async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const data = await response.json();
            return data
        }

        const species = await getPokemonSpecies(id);
        const evolsResponse = await fetch(species.evolution_chain.url);
        const evolsData = await evolsResponse.json();

        setPokemonSpecies(() => {
            return {
                species: species,
                evolutions: evolsData
            } 
        })
    }

    useEffect(() => {
        id && getEvolutions()
    }, [id])

    const handleResetData = () => {
        setPokemons( () => {
            return {
                pokemon: pokemons.pokemon
            }
        })
    }

    const weightKg = pokemon && (pokemon.weight / 10);
    const heightMts = pokemon && (pokemon.height / 10);

    // MAPPING POKEMON TYPES
    const classes = pokemon && pokemon.types.map((type, index) => {
        return (
            <div key={index} 
                className={`${type.type.name} text-slate-100 text-center text-xl rounded capitalize px-[2em] my-2`}
            > 
                {type.type.name}
            </div>
        )
    })

    return ( 
        <>
            { pokemons.pokemon.length === 0  ? 
            (
                <div className="flex justify-center items-center h-[100vh]">
                    <Pokeball />
                </div>
            ) :
            (
                <div className="my-6 mx-6 p-4 mx-auto shadow rounded-xl border-4">

                    <Link to="/pokedex/">
                        <button onClick={handleResetData} className="text-2xl shadow mr-[2em]"><AiOutlineClose /></button> 
                    </Link>

                    {/* POKEMON INFO, IMAGES AND STATS CONTAINER */}
                    <div className="flex flex-col justify-around items-center xl:flex-row">
                        
                        {/* STYLING POKEMON IMAGE */}
                        <div className="w-[30em] p-2 max-[630px]:w-[20em]">
                            <p className={`${pokemon && pokemon.background} text-slate-100 text-4xl shadow-xl uppercase text-center rounded-xl w-fit py-[0.2em] px-[2em] mx-auto`}>{pokemon && pokemon.name}</p>
                            <img className="w-[100%] h-[100%] my-0 mx-auto drop-shadow-[10px_10px_4px_rgba(0,0,0,0.4)] " src={pokemon && pokemon.img} alt={pokemon && pokemon.name}/>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center xl:flex-row  2xl:flex-row">
                            {/**STYLING INFORMATION CARD*/}
                            <div className="flex flex-col justify-center mb-6 p-4 shadow h-[100%] w-[400px] max-[630px]:w-[300px] xl:mr-6">
                                <div className=" w-[90%] my-0 mx-auto">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className={`${pokemon && pokemon.background}-text text-center text-2xl shadow px-4 border uppercase font-bold`}>description</p>
                                        <p className="text-center my-2 mx-auto">{pokemonSpecies.species && pokemonSpecies.species.flavor_text_entries[0].flavor_text}</p>
                                    </div>
                                    {classes}
                                </div>
                                <div className=" p-2 shadow mt-4 mx-auto w-[90%]">
                                    <div className=" flex flex-row text-right">
                                        <p className="font-bold w-[8em] mr-2">ID</p>
                                        <p>#{pokemon && pokemon.id}</p>
                                    </div>
                                    <div className=" flex flex-row text-right">
                                        <p className="font-bold w-[8em] mr-2">Weight</p>
                                        <p>{pokemon && weightKg.toFixed(2)} kg ( {(pokemon.weight*2.20462).toFixed()} lb )</p>
                                    </div>
                                    <div className=" flex flex-row text-right">
                                        <p className="font-bold w-[8em] mr-2">Height</p>
                                        <p>{pokemon && heightMts.toFixed(1)} m ({(pokemon.height*3.28084).toFixed()} ft)</p>
                                    </div>
                                    <div className=" flex flex-row text-right">
                                        <p className="font-bold w-[8em] mr-2">Base Experience</p>
                                        <p>{pokemon && pokemon.base_experience} pts.</p>
                                    </div>
                                </div>
                            </div>
                        
                        
                            {/* STYLING POKEMON STATS */}
                            <div className="w-[600px] p-4 shadow-xl max-[630px]:w-[400px] max-[500px]:w-[350px] max-[420px]:w-[300px]">
                                <p className={`${pokemon && pokemon.background}-text text-center text-3xl font-bold`}>Pokemon Stats</p>
                                {PokemonStats(pokemon)}
                            </div>

                        </div>
                    
                    </div>
                    
                    
                    {/* POKEMON EVOLUTIONS, TYPES AND GENERAL INFO CONTAINER */}

                    <div className={`${pokemon && pokemon.background} flex flex-col items-center justify-center border-4 mt-4 p-4 xl:flex-row`}>
                        <div className="border-2 shadow-xl p-2 h-full mb-4">
                            <p className="text-xl text-slate-100 font-bold uppercase p-2 rounded shadow-xl">weaknesses</p>
                            <PokemonWeakness 
                                pokemons={pokemons}
                                setPokemons={setPokemons}
                                name={name}
                            />
                        </div>
                        {PokemonEvolutions(pokemons, setPokemons, pokemonSpecies, name)}
                    </div>

                </div>
                
                )
            }
        </>
    )

}