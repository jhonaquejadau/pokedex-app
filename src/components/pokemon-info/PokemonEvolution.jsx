import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextConsumer } from "../../context/Context";
// import {BsArrowRight} from "react-icons/bs"
// import {BsArrowDown} from "react-icons/bs"

export const PokemonEvolutions = () => {
    const {name} = useParams();
    const {allPokemons} = useContext(ContextConsumer);
    const filterPokemon = allPokemons.pokemon.filter(pokemon => pokemon.name === name);
    const pokemon = filterPokemon[0];
    const [pokemonSpecies, setPokemonSpecies] = useState();

    const evolutions = [];

    async function getPokemonEvols (){
        
        const getPokemonSpecies = async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            const data = await response.json()
            return data
        }

        const species = await getPokemonSpecies(pokemon.id)
        const resEvols = await fetch(species.evolution_chain.url)
        const dataEvols = await resEvols.json()

        setPokemonSpecies({species: species, evolutions: dataEvols})
    }

    useEffect(() => {
        getPokemonEvols()    
    },[])
    
    /**HANDLING EVOLUTIONS DATA */
    if(pokemonSpecies) {

        if(pokemonSpecies.evolutions.chain.evolves_to.length > 0){
            const baseName = pokemonSpecies.evolutions.chain.species.name
            const baseEvol = allPokemons.pokemon.filter(pokemon => pokemon.name === baseName)
            const firstEvolName = pokemonSpecies.evolutions.chain.evolves_to[0].species.name
            const firstEvol = allPokemons.pokemon.filter(pokemon => pokemon.name === firstEvolName)
            evolutions.push(baseEvol[0], firstEvol[0])
            if (pokemonSpecies.evolutions.chain.evolves_to[0].evolves_to.length > 0){
                const secondEvolName = pokemonSpecies.evolutions.chain.evolves_to[0].evolves_to[0].species.name
                const secondEvol = allPokemons.pokemon.filter(pokemon => pokemon.name === secondEvolName)
                evolutions.push(secondEvol[0])
                // setEvolutions(prev => [...prev, secondEvol[0]])
            } 
        } else {
            evolutions.splice(0, evolutions.length)
            evolutions.push(pokemon)
            console.log('THIS pokemon has no evolutions')
            // setEvolutions(pokemon[0])
        }
    } else {
        console.log('CHARGING DATA')
    }
    
        
    
    
    
    
    
    // const ev = evolutions.map()
    // console.log(pokemonSpecies && evolutions[1])
    const evolsArray = evolutions.filter(evols => evols !== undefined)
    
    const evols = evolsArray.map( (pokemon, index) => {
        return (
            <div key={index} className="flex flex-col items-center shadow-xl rounded mx-4">
                <img className="w-[15em] h-[15em] max-[768px]:w-[13em] max-[768px]:h-[13em] border-2 max-[900px]:my-2" src={pokemon.img} alt={pokemon.name}/>
                <p className="text-slate-200 text-xl capitalize">{pokemon.name}</p>
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center md:flex-row">
            {pokemonSpecies && pokemonSpecies.evolutions.chain.evolves_to.length === 0 ? 
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
            {/* {pokemonSpecies && evols(evolutions[0])}
            <BsArrowDown className="min-[768px]:hidden text-slate-200 text-2xl my-2"/>
            <BsArrowRight className="max-[768px]:hidden text-slate-200 text-2xl"/>
            {pokemonSpecies && evols(evolutions[1])}
            <BsArrowDown className="min-[768px]:hidden text-slate-200 text-2xl my-2"/>
            <BsArrowRight className="max-[768px]:hidden text-slate-200 text-2xl"/>
            {pokemonSpecies && evols(evolutions[2])} */}
        </div>
    )
}