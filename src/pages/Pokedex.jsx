import React from "react"

import { PokemonCards } from "../components/pokedex/PokemonCards"
import { SearchPokemon } from "../components/pokedex/SearchPokemon"
import { Pokeball } from "../components/Pokeball"

export const Pokedex = ({pokemons, setPokemons}) => {
    console.log('props pokedex')
    console.log(pokemons.pokemon)
    
    return (
        <div className={`${pokemons.pokemon.length > 0 ? 'h-[100%]' : 'h-[90vh]'} flex flex-col items-center p-4 `}>
            <SearchPokemon pokemons={pokemons} setPokemons={setPokemons}/>
            {pokemons.pokemon.length > 0 ?
                <PokemonCards pokemons={pokemons}/> :  
                <Pokeball /> 
            }
        </div>
    )
}