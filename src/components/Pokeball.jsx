import React from "react";
import poke from "../assets/poke.png"
import master from "../assets/master.png"
import ultra from "../assets/ultra.png"
import superball from "../assets/superball.png"

export const Pokeball = () => {
    return (
        <div className="flex flex-col justify-center items-center max-w-[fit] w-[100%] h-full p-2">
            {/* <img className="App-logo w-[10em] drop-shadow-xl mb-2 sm:w-[10em] md:w-[12em] lg:w-[16em] xl:w-[20em] 2xl:w-[22em]" src={pokeball} alt="pokeball"/> */}

            <div className="flex flex-col items-center justify-center w-[60%] max-[900px]:w-[90%] max-[500px]:mt-[10em]">
                <ul className="flex flex-row justify-around items-center w-[60%] border-b-[0.5em]">
                    <li><img className="bounce1 w-[5em]" src={poke} alt="pokeball"/></li>
                    <li><img className="bounce2 w-[5em]" src={superball} alt="pokeball"/></li>
                    <li><img className="bounce3 w-[5em]" src={ultra} alt="pokeball"/></li>
                    <li><img className="bounce4 w-[5em]" src={master} alt="pokeball"/></li>
                </ul>
            </div>
            <h3 className="max-w-[100%] text-xl text-slate-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animate-pulse">Loading data... Please wait!!</h3>
        </div>
    )
}