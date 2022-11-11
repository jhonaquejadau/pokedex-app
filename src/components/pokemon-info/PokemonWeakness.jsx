import React, {useContext, useEffect, useState} from "react";
import { ContextConsumer } from "../../context/Context";
import { useParams } from "react-router-dom";

export const PokemonWeakness = () => {
    const {name} = useParams();
    const {allPokemons} = useContext(ContextConsumer);
    const [pokemonWeakness, setPokemonWeakness] = useState()
    const filterPokemon = allPokemons.pokemon.filter(pokemon => pokemon.name === name)
    const pokemon = filterPokemon[0] 
    const weaknessArray = [];

    // FETCHING POKEMON WEAKNESS
    async function getPokemonWeakness() {
        
        const fetchPokemonWeakness = async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
            const data = await response.json()
            return data
        }
    
        for (let index = 1; index <= 18; index++){
            const weakness = await fetchPokemonWeakness(index)
            weaknessArray.push(weakness)
        }
        setPokemonWeakness(weaknessArray)
    }

    const filt = pokemonWeakness && pokemon.types.map(element => {
        const a = pokemonWeakness.filter(weaknes => weaknes.name === element.type.name)
        return a[0]
    }).map(el => el.damage_relations.double_damage_from).map(nm => nm.map(n => n.name)).concat()
    
    const pokemonTypeWeaknesses =pokemonWeakness && [...new Set(filt[0].concat(filt[1]))].filter(value => value !== undefined).map((element,index) => {
        return (
            <div key={index} className={`${element} rounded-xl w-[5em] text-center text-slate-100`}>{element}</div>
        )
    })
    
    useEffect(() => {
        getPokemonWeakness()
    }, [])

    // MAPPING POKEMON WEAKNESS DIV
    



    return (
        <div className="grid grid-cols-3 items-center gap-2 p-2 border-2 max-[450px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 2xl:flex 2xl:flex-row">
            {pokemonTypeWeaknesses}
        </div>
    )
};