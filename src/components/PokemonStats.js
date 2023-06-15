import React, { useEffect, useState } from "react";
import "./PokemonStats.css";

// Task 1, 2, 3
export const PokemonStats = ({ pokemonStatsData }) => {
  const [sort, setSort] = useState("ASC");

  useEffect(() => {
    setPokemonStats(pokemonStatsData);
  }, [pokemonStatsData]);

  const [pokemonStats, setPokemonStats] = useState(pokemonStatsData);

  const sortStatList = () => {
    if (sort === "ASC") {
      // important! must create new list in order for react to know the list order has changed
      setPokemonStats((pokemonStats) => [
        ...pokemonStats.sort((a, b) => (a.base_stat < b.base_stat ? 1 : -1)),
      ]);
      setSort("DSC");
    } else {
      setPokemonStats((pokemonStats) => [
        ...pokemonStats.sort((a, b) => (a.base_stat > b.base_stat ? 1 : -1)),
      ]);
      setSort("ASC");
    }
  };

  return (
    <div className="StatContainer">
      <ul className="ListClass">
        {pokemonStats.map((statObj, index) => {
          return (
            <li key={statObj.stat.name}>
              {statObj.stat.name} : {statObj.base_stat}
            </li>
          );
        })}
      </ul>
      <button onClick={sortStatList} className="StyledButton SortButton">
        {sort}
      </button>
    </div>
  );
};
