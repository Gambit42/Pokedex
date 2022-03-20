import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonCards = ({ pokemonURL }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${pokemonURL}`)
      .then((res) => {
        console.log(res.data);
        setPokemon({
          name: res.data.name,
          image: res.data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="border border-gray-900 flex flex-col items-center py-2 rounded">
      <img src={pokemon.image} alt={pokemon.name} />
      <h1 className="first-letter:uppercase">{pokemon.name}</h1>
    </div>
  );
};

export default PokemonCards;
