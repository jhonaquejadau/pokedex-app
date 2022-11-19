import {useState, useEffect } from "react";
import {Routes,Route} from "react-router-dom"
import './App.css';

import { Home } from './pages/Home';
import { Pokedex } from "./pages/Pokedex";
import { PokemonInfo } from "./pages/PokemonInfo";
import { PokeGame } from "./pages/PokeGame";

function App() {

  const [pokemons, setPokemons] = useState({pokemon:[]});
  const pokemonsArray = [];

  async function getPokemons() {
    const getPokemonsData = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      return data
    } 

    for (let index = 1; index <= 905; index++){
      const pokemonFetch = await getPokemonsData(index)
      pokemonsArray.push(pokemonFetch)
    }

    setPokemons( () => {
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
        }) 
          
          
      }
    })
  }
  
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<Pokedex pokemons={pokemons} setPokemons={setPokemons}/>}></Route>
        <Route path={`/pokedex/:name`} element={<PokemonInfo pokemons={pokemons} setPokemons={setPokemons} />}></Route>
        <Route path={`/pokedex/pokemon/:name`} element={<PokeGame pokemons={pokemons} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
