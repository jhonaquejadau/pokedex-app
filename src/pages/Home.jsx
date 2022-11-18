import React from "react"
import pokemon from "../assets/pokemon.png"
import pokeball from "../assets/pokeball.png"

import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen h-[100vh]">
            <div className="h-[60%] flex flex-col items-center justify-center">
                <img className="w-[15em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[35em] 2xl:w-[45em] hover:scale-y-110 drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)]" src={pokemon} alt="pokeball-structure"/>
                <Link to='/pokedex'>
                    <button className="p-2 uppercase bg-gradient-to-r from-sky-500 to-indigo-500 text-2xl text-white font-bold rounded-2xl">open pokedex</button>
                </Link>
            </div>
            <div className="bottom-0 w-full h-[40%] border-t-[0.5em] border-black bg-rose-600 mt-4 ">
                <div className="flex flex-col items-center justify-center mx-auto h-full text-center">
                    <h1 className="text-2xl mt-6 text-slate-200 font-bold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">WELCOME TO POKEDEX API APP</h1>            
                    <p className="text-slate-300 italic">Project Design by Jaqudev_</p>
                </div>
                <img className="fixed w-[5em] top-[470px] App-logo pokeball-move" src={pokeball} />
            </div>            
        </div>
    )
}