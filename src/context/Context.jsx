import {useState,useEffect, createContext} from "react"

const Context = createContext();

const ContextProvider = (props) => {
    const [allPokemons, setAllPokemons] = useState();

    async function getPokemonApi(){
        
        let pokemonsArray = [];
        let pokemonsTypes = [];

        // FETCHING DATA FOR ALL POKEMONS
        const getPokemons = async (number) => {     
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
          const data = await response.json()
          return data
        }
        
        for(let index = 1; index <= 500; index++ ){
            const pokemonData = await getPokemons(index);
            pokemonsArray.push(pokemonData)  
        }

        // FETCHING DATA FOR TYPES
        const responseTypes = await fetch("https://pokeapi.co/api/v2/type");
        const dataTypes = await responseTypes.json();
        
        const getPokemonsTypes = async (number) => {     
          const response = await fetch(`https://pokeapi.co/api/v2/type/${number}`);
          const data = await response.json()
          return data
        }

        for(let index = 1; index <= 18; index++ ){
            const pokemonDataTypes = await getPokemonsTypes(index);
            pokemonsTypes.push(pokemonDataTypes)
        }
                
        setAllPokemons(() => {
            return {
                pokemon: pokemonsArray.map(pokemon => {
                    return {
                        abilities: pokemon.abilities,
                        name: pokemon.name,
                        id: pokemon.id,
                        weight: pokemon.weight,
                        height: pokemon.height,
                        types: pokemon.types,
                        stats: pokemon.stats,
                        img: pokemon.sprites.other['official-artwork'].front_default,
                        base_experience: pokemon.base_experience,
                        background: pokemon.types[0].type.name
                    }
                }),
                types: dataTypes.results.slice(0,18)
            }
        })

    }

    useEffect(() => {
        getPokemonApi()
    }, [])
    
    
    return (
        <Context.Provider value={{allPokemons, setAllPokemons}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context as ContextConsumer}