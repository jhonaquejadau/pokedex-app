import React from "react";
// import {BsArrowRight} from "react-icons/bs"
// import {BsArrowDown} from "react-icons/bs"

export const PokemonEvolutions = (pokemons, setPokemons, species, name) => {

    const filterPokemon = pokemons.pokemon.length > 0 && pokemons.pokemon.filter(pokemon => pokemon.name === name);
    const pokemon = filterPokemon[0]
    const evolutions = [];
 
    /**HANDLING EVOLUTIONS DATA */
    if (pokemons.pokemon.length > 0){
        if(species.evolutions && species.evolutions.chain.evolves_to.length > 0){
            const baseName = species.evolutions.chain.species.name
            const baseEvol = pokemons.pokemon.filter(pokemon => pokemon.name === baseName)
            const firstEvolName = species.evolutions.chain.evolves_to[0].species.name
            const firstEvol = pokemons.pokemon.filter(pokemon => pokemon.name === firstEvolName)
            evolutions.push(baseEvol[0], firstEvol[0])
            if (species.evolutions.chain.evolves_to[0].evolves_to.length > 0){
                const secondEvolName = species.evolutions.chain.evolves_to[0].evolves_to[0].species.name
                const secondEvol = pokemons.pokemon.filter(pokemon => pokemon.name === secondEvolName)
                evolutions.push(secondEvol[0])
            } 
        } else {
            evolutions.splice(0, evolutions.length)
            evolutions.push(pokemon)
        }
    } 

    const handleEvolution = (name) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const changePokemon = pokemons.pokemon.filter(pokemon => pokemon.name === name);
        setPokemons(prev => {
            return {
                ...prev, 
                change: changePokemon
            }
        })
    }

    const evolsArray = evolutions.filter(evols => evols !== undefined)
    
    const evols = evolsArray.map( (pokemon, index) => {
        return (
            <div onClick={() => handleEvolution(pokemon.name)} key={index} className="flex flex-col items-center shadow-xl rounded mx-4 max-[900px]:mb-6">
                <img className="w-[15em] h-[15em] max-[768px]:w-[13em] max-[768px]:h-[13em] border-2" src={pokemon.img} alt={pokemon.name}/>
                <p className="text-slate-200 text-xl capitalize">{pokemon.name}</p>
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center md:flex-row">
            {species.evolutions && species.evolutions.chain.evolves_to.length === 0 ? 
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xl text-center text-slate-200 font-bold">This pokemons has no evolutions</p>
                    {evols}
                </div> :
                <div className="flex flex-col items-center">
                    <p className="text-xl text-center text-slate-200 font-bold capitalize">evolution chain</p>
                    <div className="flex flex-row max-[900px]:flex-col items-center">
                        {evols}            
                    </div>
                </div> 
            }
        </div>
    )
}