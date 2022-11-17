import {useState, useEffect } from "react";
import {Routes,Route} from "react-router-dom"
import './App.css';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pokedex } from "./pages/Pokedex";
import { PokemonInfo } from "./pages/PokemonInfo";
import { Pokeball } from "./components/Pokeball";

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
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<Pokedex pokemons={pokemons} setPokemons={setPokemons}/>}></Route>
        <Route path={`/pokedex/:name`} element={<PokemonInfo pokemons={pokemons} />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
