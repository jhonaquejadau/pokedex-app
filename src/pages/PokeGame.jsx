import React from "react";
import {Pokeball} from "../components/Pokeball"
import { Pokemon } from "../components/poke-game/Pokemon";


export const PokeGame = ({pokemons}) => {
    
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] border-4">
            {pokemons.pokemon.length > 0 ? 
                <Pokemon pokemons={pokemons}/> :
                <Pokeball />
            }
        </div>
    )
}