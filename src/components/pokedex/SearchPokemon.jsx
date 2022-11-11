import React, { useContext, useState } from "react";
import { ContextConsumer } from "../../context/Context";
import {BiSearchAlt} from "react-icons/bi"

export const SearchPokemon = () => {
    const {allPokemons, setAllPokemons} = useContext(ContextConsumer)
    const [toggleTypes, setToggleTypes] = useState(false)
    const [formData, setFormData] = useState({searchInput: ""})

    const options = ['Lower Number', 'Higher Number', 'A-Z', 'Z-A']

    const handleRandomPokemon = (array) => {
        const newArray = array.map(item => item).sort(() => Math.random() - 0.5)
        setAllPokemons(prev => {
            return {
                ...prev,
                array: newArray
            }
        })
    }

    const handleFilterTypes = (type) => {
            if (type === "all") {
                setAllPokemons(() => {
                    return {
                        pokemon: allPokemons.pokemon,
                        types: allPokemons.types,
                        pokemonWeakness: allPokemons.pokemonWeakness
                    }
                })
            }
            else {
                const pokemonFiltered = allPokemons.pokemon.filter(pokemon => pokemon.types.some(pokemonType => pokemonType.type.name === type))
                setAllPokemons(prev => {
                    return {
                        ...prev,
                        array: pokemonFiltered
                    }
                })
            }
    }

    const handleTypesList = () => {
        setToggleTypes(prevToggle => !prevToggle)
    }

    const handleForm = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSearch = (array) => {
        const pokemonSearched = array.filter((pokemon) => pokemon.name === formData.searchInput)
        if(formData.searchInput === ""){
            setAllPokemons(() => {
                return {
                    pokemon: allPokemons.pokemon,
                    types: allPokemons.types,
                    pokemonWeakness: allPokemons.pokemonWeakness
                }
            })
        } else {
            setAllPokemons(prev => {
                return {
                    ...prev,
                    array: pokemonSearched
                }
            })
        }
        
    }
    
    const handleFormOptions = (event) => {
        event.preventDefault();
        const option = event.target.value;

        let sorted = [];
        if (option === '0') {
            sorted = allPokemons.pokemon.map(pokemon => pokemon).sort((a,b) => a.id > b.id ? 1 : -1)
        } else if (option === '1') {
            sorted = allPokemons.pokemon.map(pokemon => pokemon).sort((a,b) => a.id > b.id ? -1 : 1)
        } else if (option === '2') {
            sorted = allPokemons.pokemon.map(pokemon => pokemon).sort((a,b) => a.name > b.name ? 1 : -1)
        } else if (option === '3') {
            sorted = allPokemons.pokemon.map(pokemon => pokemon).sort((a,b) => a.name > b.name ? -1 : 1)
        } else {
            sorted = allPokemons.pokemon
        }

        setAllPokemons(prev => {
            return {
                ...prev,
                array: sorted
            }
        })
    }

    const buttonsFilter = allPokemons && allPokemons.types.map((type, index) => {
        return (
            <button key={index} onClick={() => handleFilterTypes(type.name)} className={`${type.name} mx-1 px-6 rounded-xl text-xs text-white font-medium`}>{type.name}</button>
        )
    })

    return (
        <div className="flex flex-col items-center shadow-xl rounded-xl w-[80%] mb-4 p-4 max-[1000px]:w-[100%]">
            <h2 className="text-3xl text-slate-400 font-bold mb-2 w-[90%] text-center max-[800px]:text-2xl">SELECT SEARCH THAT YOU MOST LIKE</h2>
            <div className="flex flex-col justify-around items-center p-4 shadow-xl w-[90%] max-[520px]:shadow-none max-[520px]:w-[100%] max-[520px]:p-0 xl:border-4 xl:w-[80%] xl:flex-row ">
                <form className="flex flex-col justify-center w-[100%] xl:w-fit " onSubmit={handleForm}>
                    <p className="text-xl font-bold my-0 mx-auto max-[520px]:text-center">Search by Name</p>
                    <div className="flex flex-row items-center mt-2 my-0 mx-auto max-[520px]:flex-col max-[520px]:w-[100%]">
                        <input
                            type="text"
                            placeholder="Pokemon Name"
                            className="border-2 mr-2 p-2 xl:w-[20em] max-[520px]:w-[90%]"
                            name="searchInput"
                            value={formData.searchInput.toLowerCase()}
                            onChange={handleForm}
                        />
                        <button onClick={() => handleSearch(allPokemons.pokemon)} type="submit" className="text-4xl max-[520px]:my-2"><BiSearchAlt/></button>
                    </div>
                </form>
                
                <div className="flex flex-col text-center">
                    <h3 className="text-xl font-bold capitalize">custom search</h3>
                    <div className="flex flex-row items-center justify-around mt-2 max-[760px]:flex-col">
                        <button onClick={() => handleRandomPokemon(allPokemons.pokemon)} className="bg-slate-300 px-6 rounded-xl py-[4px] shadow-xl max-[760px]:w-[100%]">Random</button>
                        <button onClick={() => handleTypesList()} className="bg-slate-300 rounded-xl px-6 py-[4px] shadow-xl mx-10 max-[760px]:my-4 max-[760px]:w-[100%]">Type</button>
                        <div className="flex items-center">
                            <p className="mr-2 text-slate-600">Order by:</p>
                            <form>
                                <select className="bg-slate-300 p-2" id="searchOption" value={formData.searchOption} onChange={handleFormOptions} name="searchOption">
                                    <option value={-1}> ---Options--- </option>
                                    {
                                        options.map((opt, index) => {
                                            return <option key={index} value={index}>{opt}</option>
                                        })
                                    }
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-row border-2 p-2 mt-4 w-[90%] overflow-auto ${toggleTypes ? 'static' : 'hidden'}`}>
                <button onClick={() => handleFilterTypes("all")} className="border-2 rounded-xl px-6">Pokemons</button>
                {buttonsFilter}
            </div>

        </div>
    )
}