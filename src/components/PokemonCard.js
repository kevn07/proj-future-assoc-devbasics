import React from "react";
import "./PokemonCard.css";
import pokemonLogo from "../pokemon_logo.svg";
import { PokemonStats } from "./PokemonStats";

export const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="CardContainer">
      <div className="SpriteContainer">
        <img
          src={pokemonData.frontSprite}
          alt={`${pokemonData.name}-sprite`}
          width="250"
          height="250"
        />
        <img
          src={pokemonData.backSprite ? pokemonData.backSprite : pokemonLogo}
          alt={`${pokemonData.name}-backSprite`}
          width="250"
          height="250"
        />
      </div>

      <h3 className="CardHeading">{pokemonData.name}</h3>
      <div className="TypeList">
        {pokemonData.types.map((obj) => {
          return <span className={`type ${obj.type.name}`} key={obj.slot} />;
        })}
      </div>

      {/* task 4 */}
      <p>
        {pokemonData.noOfLocations
          ? `Encountered in ${pokemonData.noOfLocations} locations`
          : "Cannot be encountered"}
      </p>
      <PokemonStats pokemonStatsData={pokemonData.stats} />
    </div>
  );
};
