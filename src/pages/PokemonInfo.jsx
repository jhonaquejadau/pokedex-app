import React, {useContext} from "react";
import { useParams, Link } from "react-router-dom";
import { ContextConsumer } from "../context/Context";
import ProgressBar from "@ramonak/react-progress-bar";

import { PokemonEvolutions } from "../components/pokemon-info/PokemonEvolution";
import { PokemonWeakness } from "../components/pokemon-info/PokemonWeakness";
import {AiOutlineClose} from "react-icons/ai"


export const PokemonInfo = () => {

    const types = {
        normal: "#a5a5a5",
        fighting: "#e81319",
        flying: "#5eb9b2",
        poison: "#611380",
        ground: "#bfac21",
        rock: "#776a3e",
        bug: "#aedf78",
        ghost: "#8e55a4",
        steel: "#7b8e8a",
        fire: "#e95c4d",
        water: "#43ccff",
        grass: "#00ca91",
        electric: "#f9be00",
        psychic: "#8a0532",
        ice: "#66d1e5",
        dragon: "#29036a",
        dark: "#2d221c",
        fairy: "#f87ea7"
    }
    
    const {name} = useParams();
    const {allPokemons} = useContext(ContextConsumer);

    const filterPokemon = allPokemons.pokemon.filter(pokemon => pokemon.name === name);
    const pokemon = filterPokemon[0];

    const weightKg = (pokemon.weight) * 0.453592;

    // MAPPING POKEMON TYPES
    const classes = pokemon.types.map((type, index) => {
        return (
                <div key={index} 
                    className={`${type.type.name} text-slate-100 text-center text-xl rounded capitalize px-[2em] my-2`}
                > 
                    {type.type.name}
                </div>
        )
    })

    // MAXIMUM VALUE FROM STATS
    const arr = pokemon.stats.map(pokemon => pokemon.base_stat)
    const max = Math.max(...arr)
    const total = arr.reduce((num, index) => num + index, 0)
    console.log(total)

    // MAPPING POKEMON STATS
    const stats = pokemon.stats.map((stat, index) => {
        return (
            <div key={index} className="shadow rounded w-[100%]">
                <p className="capitalize">{stat.stat.name}</p>
                <ProgressBar key={index} 
                    completed={`${stat.base_stat}`} 
                    maxCompleted={max} 
                    bgColor={types[pokemon.background]}
                    height={"15px"}
                />
            </div>
        )
    })
        
    return (
        <div className=" w-[90%] my-4 mx-auto shadow rounded-xl p-6">

            <Link to="/pokedex/">
                <button className="text-2xl shadow"><AiOutlineClose /></button> 
            </Link>

            {/* POKEMON INFO, IMAGES AND STATS CONTAINER */}
            <div className="flex flex-col justify-around items-center xl:flex-row">
                
                {/* STYLING POKEMON IMAGE */}
                <div className="w-[30em] p-2 max-[630px]:w-[20em]">
                    <p className={`${pokemon.background} text-slate-100 text-4xl shadow-xl uppercase text-center rounded-xl p-2`}>{pokemon.name}</p>
                    <img className="w-[100%] h-[100%] my-0 mx-auto drop-shadow-[10px_10px_4px_rgba(0,0,0,0.4)] " src={pokemon.img} alt={pokemon.name}/>
                </div>
                
                <div className="flex flex-col items-center xl:flex-row  2xl:flex-row">
                    {/**STYLING INFORMATION CARD*/}
                    <div className="flex flex-col justify-center mb-6 xl:mr-6">
                        <div className=" w-[90%] my-0 mx-auto">
                            <p className={`${pokemon.background}-text text-center text-2xl shadow-xl`}>Pokemon Types</p>
                            {classes}
                        </div>
                        <div className="w-[400px] p-2 shadow-xl max-[630px]:w-[300px]">
                            <div className=" flex flex-row text-right">
                                <p className="font-bold w-[8em] mr-2">ID</p>
                                <p>#{pokemon.id}</p>
                            </div>
                            <div className=" flex flex-row text-right">
                                <p className="font-bold w-[8em] mr-2">Weight</p>
                                <p>{weightKg.toFixed(2)} kg ( {pokemon.weight} lb )</p>
                            </div>
                            <div className=" flex flex-row text-right">
                                <p className="font-bold w-[8em] mr-2">Height</p>
                                <p>{pokemon.height}</p>
                            </div>
                            <div className=" flex flex-row text-right">
                                <p className="font-bold w-[8em] mr-2">Base Experience</p>
                                <p>{pokemon.base_experience} pts.</p>
                            </div>
                        </div>
                    </div>
                
                
                    {/* STYLING POKEMON STATS */}
                    <div className="w-[500px] p-4 shadow-xl max-[630px]:w-[400px] max-[500px]:w-[350px] max-[420px]:w-[300px]">
                        <p className={`${pokemon.background}-text text-center text-3xl font-bold`}>Pokemon Stats</p>
                        {/* {setTimeout({stats}, 1000)} */}
                        {stats}
                        <p className="px-2 mt-2">Total <span className={`${pokemon.background}-text font-bold`}>{total}</span></p>
                    </div>

                </div>
            
            </div>
            
            
            {/* POKEMON EVOLUTIONS, TYPES AND GENERAL INFO CONTAINER */}

            <div className={`${pokemon.background} flex flex-col items-center justify-center border-4 mt-4 p-4 xl:flex-row`}>
                <div className="border-2 shadow-xl p-2 h-full mb-4">
                    <p className="text-xl text-slate-100 font-bold uppercase p-2 rounded shadow-xl">damage from</p>
                    <PokemonWeakness />
                </div>
                <PokemonEvolutions />
            </div>

        </div>
    )
}