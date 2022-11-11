import React from "react"
import pokemon from "../assets/pokemon.png"

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-100 h-[90vh]">
            <img className="w-[15em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em] 2xl:w-[30em]" src={pokemon} alt="pokeball-structure"/>
            <h1 className="text-xl mt-6 text-slate-500 font-bold">WELCOME TO POKEDEX API APP</h1>            
            <p className="text-slate-400 italic">Project Design by Jaqudev_</p>            
        </div>
    )
}