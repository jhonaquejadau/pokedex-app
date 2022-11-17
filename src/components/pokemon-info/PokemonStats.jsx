import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export const PokemonStats = ({pokemon}) => {

    const types = {
        normal: "#a5a5a5",
        fighting: "#e81319",
        flying: "#5eb9b2",
        poison: "#611380",
        ground: "#bfac21",
        rock: "#776a3e",
        bug: "#aedf78",
        ghost: "#8e55a4",
        steel: "#7b8e8a",
        fire: "#e95c4d",
        water: "#43ccff",
        grass: "#00ca91",
        electric: "#f9be00",
        psychic: "#8a0532",
        ice: "#66d1e5",
        dragon: "#29036a",
        dark: "#2d221c",
        fairy: "#f87ea7"
    }

    const arr = pokemon.stats.map(pokemon => pokemon.base_stat)
    const max = Math.max(...arr)
    const total = arr.reduce((num, index) => num + index, 0)

    // MAPPING POKEMON STATS
    const stats = pokemon.stats.map((stat, index) => {
        
        return (
            <div key={index} className="shadow rounded w-[100%]">
                <p className="capitalize">{stat.stat.name}</p>
                <ProgressBar key={index} 
                    completed={`${stat.base_stat}`} 
                    maxCompleted={max} 
                    bgColor={`${types[pokemon.background]}`}
                    height={"15px"}
                    />
            </div>
        )
    })
    
    return ( 
        <>
            {stats}
            <p className="px-2 mt-2">Total <span className={`${pokemon.background}-text font-bold`}>{total}</span></p>
        </>
    )
}