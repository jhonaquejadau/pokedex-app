import React from "react";
import pokeball from "../assets/pokeball.png"

export const Pokeball = () => {
    return (
        <div className="flex flex-col justify-xenter items-center max-w-[fit] w-[100%] p-2">
            <img className="App-logo w-[10em] drop-shadow-xl mb-2 sm:w-[10em] md:w-[12em] lg:w-[16em] xl:w-[20em] 2xl:w-[22em]" src={pokeball} alt="pokeball"/>
            <h3 className="max-w-[100%] text-xl text-slate-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Loading data... Please wait!!</h3>
        </div>
    )
}