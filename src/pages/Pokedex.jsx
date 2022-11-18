import React, {useState} from "react"
import {Link} from "react-router-dom"

import { PokemonCards } from "../components/pokedex/PokemonCards"
import { SearchPokemon } from "../components/pokedex/SearchPokemon"
import { Pokeball } from "../components/Pokeball"

export const Pokedex = ({pokemons, setPokemons}) => {
    
    const [count, setCount] = useState(0);

    return (
        <div className={`${pokemons.pokemon.length > 0 ? 'h-[100%]' : 'h-[100vh]'} flex flex-col items-center p-4 `}>
            <SearchPokemon pokemons={pokemons} setPokemons={setPokemons} count={count} setCount={setCount}/>
            <div className={`${count > 3 ? 'static' : 'hidden'} border-4`}>
                <p className="text-xl animation-bounce capitalize">click here to get a surprise, just fun...</p>
                <Link to="/pokedex/pokemon/game">
                    <button className="uppercase text-center text-white font-bold text-xl rounded-2xl py-1 px-6 bg-gradient-to-r from-cyan-500 to-blue-500">
                        random game
                    </button>
                </Link>
            </div>
            {pokemons.pokemon.length > 0 ?
                <PokemonCards pokemons={pokemons}/> :  
                <Pokeball /> 
            }
        </div>
    )
}