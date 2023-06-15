import "./App.css";
import pokemonLogo from "./pokemon_logo.svg";
import { useEffect, useState } from "react";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
  const totalPokemonCount = 1015;
  const [pokemonData, setPokemonData] = useState(null);

  const getRandomPokemon = async (url = pokeUrl) => {
    const pokeIndex = Math.floor(Math.random() * totalPokemonCount); // random pokemon index
    const response = await fetch(`${pokeUrl}/${pokeIndex}`); // returns promise

    // Task 4
    const encounterResponse = await fetch(`${pokeUrl}/${pokeIndex}/encounters`);
    const data = await response.json(); // await promise
    const encounterData = await encounterResponse.json();

    const pokemonData = {
      name: data.name,
      frontSprite: data.sprites.front_default,
      types: data.types,
      backSprite: data.sprites.back_default,
      stats: data.stats,
      noOfLocations: encounterData.length,
    }; // construct obj with relevant data
    setPokemonData(pokemonData); // set data state
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokemonLogo} alt="pokemon-logo" width="500px"></img>
        <br />
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
