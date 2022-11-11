import React, {useState} from "react";
import {Link} from "react-router-dom"
import pokeball from "../assets/pokeball.png"
import {BiMenu} from "react-icons/bi"
import {RiCloseFill} from "react-icons/ri"

export const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const toggleShowMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }
    
    return (
        <div className="flex flex-row items-center w-full p-1 px-[3em] shadow-xl bg-white">
            <img className="w-10 mr-auto" src={pokeball} alt="pokebal-logo"/>
            
            <nav className={`flex justify-center fixed w-[70%] top-0 bottom-0 z-10 ${showMenu ? "left-0 bg-slate-200" : "-left-full"} trasition-all duration-500 sm:static sm:w-fit`}>
                <ul className={` flex flex-row items-center gap-4 text-center max-[640px]:flex-col max-[640px]:justify-center`}>
                    <li onClick={toggleShowMenu} className="rounded-xl bg-cyan-100 px-4"><Link to="/">Home</Link></li>
                    <li onClick={toggleShowMenu} className="rounded-xl bg-cyan-100 px-4"><Link to="/pokedex">Pokedex</Link></li>
                </ul>
            </nav>
            <button onClick={toggleShowMenu} className="text-2xl text-slate-600 sm:hidden">{showMenu ? <RiCloseFill/> : <BiMenu />}</button>
        </div>
    )
}