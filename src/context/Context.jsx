import {useState,useEffect, createContext} from "react"

const Context = createContext();

const ContextProvider = (props) => {
    const [pokemonContext, setPokemonContext] = useState();

    async function getPokemonApi(){
        
        // FETCHING POKEMON TYPES
        const responseTypes = await fetch("https://pokeapi.co/api/v2/type");
        const dataTypes = await responseTypes.json();
        
        setPokemonContext(() => {
            return {
                types: dataTypes.results.slice(0,18)
            }
        })
    }

    useEffect(() => {
        getPokemonApi()
    }, [])
    
    
    return (
        <Context.Provider value={{pokemonContext}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context as ContextConsumer}