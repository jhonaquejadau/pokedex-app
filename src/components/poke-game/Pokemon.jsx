import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import pokeball from "../../assets/pokeball.png"
import {PokemonStats} from "../../components/pokemon-info/PokemonStats"

export const Pokemon = ({pokemons}) => {

    const pokemon = pokemons.pokemon.length > 0 && pokemons.pokemon
    const [random, setRandom] = useState(Math.floor(Math.random() * pokemon.length))

    const handleRandom = () => {
        setRandom(Math.floor(Math.random() * pokemon.length))
    }

    const abilities = pokemon[random].abilities.map( (ability, index) => {
        return ( 
            <div key={index}
                className="texl-xl font-bold text-slate-200 uppercase shadow w-fit text-center mx-2"
            >
                {ability.ability.name}
            </div>
        )
    })

    return (
        <>
            {pokemon && (
                <div className={`${pokemon[random].background} flex flex-col justify-around items-center w-full h-[100%] min-[900px]:h-[100vh] p-4`}>
                    
                    {/* RANDOM POKEMON */}
                    <div onClick={handleRandom} className="flex flex-col justify-around items-center shadow rounded p-2 w-fit fixed top-5 left-5">
                        <img className="App-logo w-[3em]" src={pokeball} alt="pokeball" />
                        <p className="animate-pulse font-bold text-slate-200 capitalizes">click here!!</p>
                    </div>

                    {/* POKEMON INFO */}
                    <div className="flex flex-col justify-center items-center w-[100%] min-[900px]:w-[90%] min-[900px]:flex-row">
                        <div className="flex flex-col items-center items-center min-[900px]:w-[40%]">
                            <p className="text-slate-100 font-bold uppercase text-4xl">{ pokemon[random].name}</p>
                            <Link to={`/pokedex/${pokemon[random].name}`}>
                                <img className="shadow-xl rounded-xl w-[25em] h-[25em] max-[900px]:w-[20em] max-[900px]:h-[20em]" src={pokemon[random].img} alt={pokemon[random].name} />
                            </Link>
                        </div>

                        <div className="flex flex-col justify-center items-center w-[100%] h-full min-[900px]:w-[60%]">
                            {/* ABILITIES */}
                            <div className="flex flex-col px-8 py-2 shadow-xl text-center border-2 rounded my-2">
                                <p className="text-6xl font-bold text-slate-200 opacity-40 uppercase max-[900px]:text-4xl">abilities</p>
                                <div className="flex flex-row justify-around items-center">
                                    {abilities}
                                </div>
                            </div>
                            {/* STATS */}
                            <div className="w-[90%] p-4 shadow-xl mt-2">
                                    <p className="text-6xl font-bold text-slate-200 opacity-40 uppercase max-[900px]:text-4xl">stats</p>
                                    {PokemonStats(pokemon[random])}
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                            
                        </div>

                    </div>

                    {/* NAVIGATION BUTTONS */}
                    <div className="flex flex-row justify-center items-center w-full max-[900px]:flex-col max-[900px]:mt-6">
                        <Link to="/">
                            <button className=" uppercase text-white font-bold rounded-xl animate-bounce bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-8 mx-2 max-[900px]:my-2">
                                go back to options
                            </button>
                        </Link>
                        <Link to="/pokedex">
                            <button className=" uppercase text-white font-bold rounded-xl animate-bounce bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-8 mx-2 max-[900px]:my-2">
                                go to pokedex
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}