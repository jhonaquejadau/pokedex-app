import React from "react";
import {Link} from "react-router-dom"
import poke from "../assets/poke.png"
import superball from "../assets/superball.png"
import master from "../assets/master.png"
import ultra from "../assets/ultra.png"

export const PokedexOptions = () => {
    return ( 
        <div className="w-full h-[100%] flex flex-col justify-around items-center p-6 ">
            <p className="z-20 uppercase text-slate-400 font-bold max-[900px]:text-3xl text-5xl text-center w-[80%] shadow-xl">how do you see your pokedex ?</p>

            <div className="z-10 flex flex-row justify-around items-center my-4 w-[90%] max-[]  max-[1100px]:grid max-[1100px]:grid-cols-2 max-[1100px]:w-[70%] ">
                
                <Link to="/pokedex">
                    <div className="flex justify-center items-center w-[300px] h-[200px]   max-[1100px]:my-2 max-[900px]:w-[300px] max-[900px]:h-[200px] min-[1450px]:w-[400px]  min-[1450px]:h-[300px] rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl">
                        <p className="text-2xl text-slate-200 font-bold uppercase">pokecards</p>
                    </div>
                </Link>
                
                <Link to="/pokerandom/game">
                    <div className="flex justify-center items-center w-[300px] h-[200px]   max-[1100px]:my-2 max-[900px]:w-[300px] max-[900px]:h-[200px] min-[1450px]:w-[400px]  min-[1450px]:h-[300px] rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl">
                        <p className="text-2xl text-slate-200 font-bold uppercase">pokerandom</p>
                    </div>
                </Link>

                <div className="flex flex-col justify-center items-center w-[300px] h-[200px]   max-[1100px]:my-2 max-[900px]:w-[300px] max-[900px]:h-[200px] min-[1450px]:w-[400px]  min-[1450px]:h-[300px] rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl">
                    <p className="text-2xl text-slate-200 font-bold uppercase">pokelist</p>
                    <p className="italic capitalize">coming soon</p>
                </div>
            </div>

            <div className="flex flex-row justify-around items-center w-[90%] max-[900px]:w-[100%]">
                <img className="App-logo w-[10%]" src={poke} alt="poke" />
                <img className="App-logo w-[10%]" src={superball} alt="superball" />
                <img className="App-logo w-[10%]" src={ultra} alt="ultra" />
                <img className="App-logo w-[10%]" src={master} alt="master" />
                {/* <div className="w-[10em] h-[10em] grass">
                    <img src={require('../assets/icons/bug.svg').default} />
                </div> */}
            </div>

        </div>
    )
}