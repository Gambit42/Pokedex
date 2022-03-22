import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import pokemonType from "./PokemonType";
import { RiSwordFill, RiShieldFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

const SinglePokemon = ({ pokemonName }) => {
  const pokemon = useSelector((state) => state.pokemon.data[pokemonName]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(pokemon.species.url)
      .then((res) => {
        for (let entry of res.data.flavor_text_entries) {
          if (entry.language.name === "en" && entry.version.name === "x") {
            return setDescription(entry.flavor_text);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon]);

  return (
    <div className="pt-20 font-roboto bg-stone-50">
      <div className="shadow-lg max-w-lg h-auto mx-auto flex flex-col items-center 0 rounded">
        <div
          className="py-5 w-full flex flex-col justify-center items-center rounded-t"
          style={{
            backgroundColor: pokemonType[pokemon.types[0].type.name],
          }}
        >
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            className="w-auto h-44"
            alt={`${pokemon} artwork`}
          />
          <div className="mt-2 border border-gray-200 rounded-full w-2/5 bg-emerald-400 h-8 flex items-center justify-center">
            <h1 className="text-sm font-bold text-gray-700">
              {`HP: ${pokemon.stats[0].base_stat}`}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center pt-2">
            <div className="flex flex-row items-center mx-2 p-1">
              <RiSwordFill className="text-red-600 h-6 w-6 mr-1" />
              <h1 className="text-sm font-bold text-gray-700">
                {pokemon.stats[1].base_stat}
              </h1>
            </div>
            <div className="flex flex-row items-center mx-2">
              <RiShieldFill className="text-gray-600 h-6 w-6 mr-1" />
              <h1 className="text-sm font-bold text-gray-700">
                {pokemon.stats[2].base_stat}
              </h1>
            </div>
            <div className="flex flex-row items-center mx-2">
              <AiFillThunderbolt className="text-yellow-600 h-6 w-6 mr-1" />
              <h1 className="text-sm font-bold text-gray-700">{`${pokemon.stats[5].base_stat}`}</h1>
            </div>
          </div>
        </div>
        <div className="pb-10 pt-2 w-full flex flex-col items-start px-3">
          <div className="flex flex-row items-center">
            <h1 className="first-letter:uppercase font-semibold py-2 mr-2">
              {pokemon.name}
            </h1>
            <h1 className="first-letter:uppercase font-semibold py-2 text-gray-700">
              {`#${pokemon.id}`}
            </h1>
          </div>
          <div className="w-full flex flex-row">
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="w-20 border px-2 mr-2 rounded"
                style={{ backgroundColor: pokemonType[type.type.name] }}
              >
                <h1 className="text-center">{type.type.name}</h1>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <h1 className="font-bold pb-1">Description:</h1>
            {description !== "" ? (
              <p className="text-base">{description}</p>
            ) : (
              <p className="text-base">
                No description available for this pokemon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
