import { useContext } from "react";
import {Routes,Route} from "react-router-dom"
import './App.css';
import { ContextConsumer } from "./context/Context";

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pokedex } from "./pages/Pokedex";
// import { PokemonModal } from "./pages/PokemonModal";
import { PokemonInfo } from "./pages/PokemonInfo";
import { Pokeball } from "./components/Pokeball";

function App() {

  // const [pokemons, setPokemons] = useState([]);
  const {allPokemons} = useContext(ContextConsumer)

  // async function getPokemons() {
  //   const getPokemonsData = async (id) => {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     const data = await response.json()
  //     return data
  //   } 
  //   let pokemonsArray = [];
  //   for (let index = 1; index <= 900; index++){
  //     const pokemonFetch = await getPokemonsData(index)
  //     pokemonsArray.push(pokemonFetch)
  //   }
  //   setPokemons(() => {
  //     return {
  //         pokemon: pokemonsArray.map(pokemon => {
  //             return {
  //                 abilities: pokemon.abilities,
  //                 name: pokemon.name,
  //                 id: pokemon.id,
  //                 weight: pokemon.weight,
  //                 height: pokemon.height,
  //                 types: pokemon.types,
  //                 stats: pokemon.stats,
  //                 img: pokemon.sprites.other.dream_world.front_default,
  //                 base_experience: pokemon.base_experience,
  //                 background: pokemon.types[0].type.name
  //             }
  //         })
  //     }
  //   }) 
  // }
  
  // useEffect(() => {
  //   getPokemons()
  // }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/pokedex" element={<Pokedex />}></Route>
        <Route path={`/pokedex/:name`} element={ allPokemons ? <PokemonInfo /> : <Pokeball/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
