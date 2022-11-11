import React, { useContext} from "react"
import { ContextConsumer } from "../context/Context"

import { PokemonCards } from "../components/pokedex/PokemonCards"
import { SearchPokemon } from "../components/pokedex/SearchPokemon"
import { Pokeball } from "../components/Pokeball"

export const Pokedex = () => {
    const {allPokemons} = useContext(ContextConsumer)
    
    return (
        <div className={`${!allPokemons && 'h-[90vh] flex justify-center items-center'} flex flex-col items-center p-4`}>
            <SearchPokemon />
            {allPokemons ?
                <PokemonCards/> :  
            <Pokeball />
            }
        </div>
    )
}