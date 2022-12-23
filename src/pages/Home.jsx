import React from "react"
import { Link } from "react-router-dom"


import pokemon from "../assets/pokemon.png"

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="flex flex-col items-center justify-center py-[4em]">
                <img className="w-[15em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[35em] 2xl:w-[45em] hover:scale-y-110 drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]" src={pokemon} alt="pokeball-structure"/>
            </div>

            <div className="relative flex flex-col justify-evenly items-center bottom-0 w-full h-[100vh] border-t-[0.5em] border-black bg-rose-600 px-6 text-center">

                <div>
                    <h1 className="text-2xl text-slate-200 font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">WELCOME TO POKEDEX API APP</h1>            
                    <p className="text-slate-300 italic">Project Design by Jaqudev_</p>
                </div>
            
                <div className="flex flex-row items-center justify-evenly w-full  mx-auto max-[1100px]:flex-col">
                    
                    <Link to="/pokedex">
                        <div className="flex flex-col justify-evenly items-center w-[300px] h-[200px] p-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-[1.05]">
                            <p className="text-2xl text-slate-200 font-bold uppercase">pokedex</p>
                            <p className="text-slate-300">Custom pokedex to find information about pokemons until version viii (905 pokemons)</p>
                        </div>
                    </Link>
                    
                    <Link to="/pokerandom/game">
                        <div className="flex flex-col justify-evenly items-center w-[300px] h-[200px] p-4 max-[1100px]:my-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-[1.05]">
                            <p className="text-2xl text-slate-200 font-bold uppercase mb-4">pokerandom</p>
                            <p className="text-slate-300">Custom game to get information about random pokemons</p>
                        </div>
                    </Link>

                    <div className="flex flex-col justify-center items-center w-[300px] h-[200px] rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-[1.05]">
                        <p className="text-2xl text-slate-200 font-bold uppercase">pokelist</p>
                        <p className="italic capitalize">coming soon</p>
                    </div>
                </div>

            </div>            
        </div>
    )
}