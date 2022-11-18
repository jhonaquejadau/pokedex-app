import React from "react";
import {Link} from "react-router-dom"
import { Pokemon } from "../components/poke-game/Pokemon";

export const PokeGame = ({pokemons}) => {
    
    return (
        <div className="flex flex-col items-center justify-center border-2 h-[100vh]">
            <Pokemon pokemons={pokemons}/>
        </div>
    )
}