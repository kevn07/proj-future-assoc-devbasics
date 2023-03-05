import React from "react";
import "./PokemonCard.css";
export const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="CardContainer">
      <img
        src={pokemonData.sprite}
        alt={`${pokemonData.name}-sprite`}
        width="250"
        height="250"
      />
      <h3 className="CardHeading">{pokemonData.name}</h3>
      <div className="TypeList">
        {pokemonData.types.map((obj) => {
          return <span className={`type ${obj.type.name}`} key={obj.slot} />;
        })}
      </div>
    </div>
  );
};
