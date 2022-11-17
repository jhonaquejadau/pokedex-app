import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import pokeball from "../../assets/pokeball.png"

export const Pokemon = ({pokemons}) => {

    const pokemon = pokemons.pokemon.length > 0 && pokemons.pokemon
    const [random, setRandom] = useState(Math.floor(Math.random() * pokemon.length))
    // const random = Math.floor(Math.random() * pokemon.length)

    const handleRandom = () => {
        setRandom(Math.floor(Math.random() * pokemon.length))
    }

    return (
        <>
            {pokemon && (
                <div className={`${pokemon[random].background} w-full h-full p-4`}>
                    
                    <div onClick={handleRandom} className="flex flex-col items-center shadow rounded p-2 w-fit">
                        <img className="App-logo w-[3em]" src={pokeball} alt="pokeball" />
                        <p className="animate-pulse font-bold text-slate-200 capitalizes">click here!!</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-slate-100 font-bold uppercase text-4xl">{ pokemon[random].name}</p>
                        <img className="shadow-xl rounded-xl w-[25em] h-[25em]" src={pokemon[random].img} alt={pokemon[random].name} />
                    </div>
                    <Link to="/pokedex">
                        <button className="uppercase text-white font-bold rounded-xl animate-bounce bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-6">
                            go back to pokedex
                        </button>
                    </Link>
                </div>
            )}
        </>
    )
}