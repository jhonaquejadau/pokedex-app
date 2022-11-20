import React from "react";
import {Link} from "react-router-dom"
import { icons } from "../../assets/icons/icons";

export const PokemonCards = ({pokemons}) => {

    console.log('NEW POKEMON')
    console.log(pokemons)
 
    let condition = [];
    if (pokemons){
        if(pokemons.array){
            condition = pokemons.array
        } else {
            condition = pokemons.pokemon
        }
    }  else {
        condition = []
    }

    const cards = condition.map((card, index) => {
        
        const classes = card.types.map((pokeType, index) => {
            const classType = pokeType.type.name === card.types[0].type.name ? `${card.types[0].type.name}` : `${card.types[1].type.name}`
            return (
                <div 
                    key={index} 
                    className={`${classType} flex flex-row justify-center items-center text-center text-white border-2 rounded-xl shadow-xl px-6 mx-2 max-[640px]:px-4`}
                >
                    <img className="w-[20px] h-[20px] mr-2" src={icons[pokeType.type.name]} alt={`${pokeType.type.name}`}/>
                    <p>{pokeType.type.name}</p>
                </div>
                )
        })

        return (
            <Link key={index} to={`/pokedex/${card.name}`}>
                <div key={card.id} className={`${card.types[0].type.name} relative flex flex-col items-center p-4 transition duration-100 hover:scale-[98%] w-[100%] h-[100%] border-4`}>
                    <div className="absolute top-0 left-0 font-bold text-lg text-slate-100">#{card.id}</div>
                    <p className="text-white capitalize text-3xl max-[640px]:text-2xl">{card.name}</p>
                    <div className="w-[12em] max-[640px]:w-[8em]">
                        <img className="w-full h-[12em] drop-shadow-[10px_10px_4px_rgba(0,0,0,0.25)] max-[640px]:m-0 shadow p-2 hover:scale-110" src={card.img} alt={card.name}/>
                    </div>
                    <div className="flex flex-row mt-2 shadow p-2">
                        {classes}
                    </div>
                    {/* <div className="hidden xl:flex xl:flex-row xl:w-fit xl:my-0 xl:mx-auto">
                        <p className="my-2 mx-0.5 p-2 shadow-xl bg-slate-100/[0.2] text-white text-xs rounded-2xl "><span className="font-bold">Base Experience:</span> {card.base_experience}</p>
                        <p className="my-2 mx-0.5 p-2 shadow-xl bg-slate-100/[0.2] text-white text-xs rounded-2xl "><span className="font-bold">Height:</span> {card.height}</p>
                        <p className="my-2 mx-0.5 p-2 shadow-xl bg-slate-100/[0.2] text-white text-xs rounded-2xl "><span className="font-bold">Weight:</span> {card.weight}</p>
                    </div> */}
                </div>
            </Link>
        )
    })

    return (
        <div className="w-[80%] grid grid-cols-4 p-2 gap-2 max-[900px]:grid-cols-2 max-[1000px]:w-[100%] max-[520px]:flex max-[520px]:flex-col ">
            {cards}
        </div>
    )
}