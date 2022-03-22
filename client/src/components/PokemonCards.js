/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pokeball from "../images/pokeball.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import pokemonType from "./PokemonType";

const PokemonCards = ({ pokemonURL }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    image: "",
    type: "",
  });

  useEffect(() => {
    axios
      .get(`${pokemonURL}`)
      .then((res) => {
        setPokemon({
          id: res.data.id,
          name: res.data.species.name,
          image: res.data.sprites.other["official-artwork"].front_default,
          type: res.data.types[0].type.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={`shadow-lg flex flex-col items-center rounded cursor-pointer font-roboto h-60`}
      key={pokemon.name}
      onClick={() => {
        navigate(`/pokemon/${pokemon.name}`);
      }}
    >
      <div
        className="w-full flex justify-center items-center py-5 rounded-t h-40"
        style={{ backgroundColor: pokemonType[pokemon.type] }}
      >
        {pokemon.image != null ? (
          <LazyLoadImage
            effect="opacity"
            src={pokemon.image}
            alt={pokemon.name}
            className="w-28 h-28 z-10"
          />
        ) : (
          <img src={Pokeball} alt="not found pokemon" className="w-28 h-28" />
        )}
      </div>
      <div className="flex flex-row items-center w-full justify-center h-20">
        <h1 className="first-letter:uppercase font-medium mr-2">
          {pokemon.name}
        </h1>
        <h1 className="first-letter:uppercase00000000000000000 text-gray-700">
          {`#${pokemon.id}`}
        </h1>
      </div>
    </div>
  );
};

export default PokemonCards;
