import React from "react";
import {Link} from "react-router-dom"

export const Buttons = () => {
    return (
        <div className="flex flex-row justify-center items-center w-full max-[900px]:flex-col">
            <Link to="/pokedex-options">
                <button className=" uppercase text-white font-bold rounded-xl animate-bounce bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-8 mx-2 max-[900px]:my-2">
                    go back to options
                </button>
            </Link>
            <Link to="/pokedex">
                <button className=" uppercase text-white font-bold rounded-xl animate-bounce bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-8 mx-2 max-[900px]:my-2">
                    go to pokedex
                </button>
            </Link>
        </div>
    )
}