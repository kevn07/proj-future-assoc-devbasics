import "./App.css";
import { useEffect, useState } from "react";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
  const totalPokemonCount = 1015;
  const [pokemonData, setPokemonData] = useState(null);

  const getRandomPokemon = async (url = pokeUrl) => {
    const pokeIndex = Math.floor(Math.random() * totalPokemonCount); // random pokemon index
    const response = await fetch(`${pokeUrl}/${pokeIndex}`); // returns promise
    const data = await response.json(); // await promise
    const pokemonData = {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types,
    }; // construct obj with relevant data
    setPokemonData(pokemonData); // set data state
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Pokemon Generator</h3>
        {pokemonData && <PokemonCard pokemonData={pokemonData} />}
        <br />
        <button className="StyledButton" onClick={getRandomPokemon}>
          Fetch Pokemon
        </button>
      </header>
    </div>
  );
}

export default App;
