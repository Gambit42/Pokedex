import React from "react";
import { useSelector } from "react-redux";
import PokemonSpecies from "./PokemonSpecies";
import pokemonType from "./PokemonType";

const SinglePokemon = ({ pokemonName }) => {
  const pokemon = useSelector((state) => state.pokemon.data[pokemonName]);

  return (
    <div className="pt-16 font-roboto bg-stone-50">
      <div className="shadow-lg max-w-lg h-auto mx-auto flex flex-col items-center justify-center rounded">
        <div
          className="py-5 w-full flex justify-center items-center rounded-t"
          style={{
            backgroundColor: pokemonType[pokemon.types[0].type.name],
          }}
        >
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            className="w-auto h-52"
            alt={`${pokemon} artwork`}
          />
        </div>
        <div className="pb-10 pt-2 w-full flex flex-col justify-center items-center px-4 sm:px-8">
          <div className="flex flex-row items-center">
            <h1 className="first-letter:uppercase font-semibold py-2 mr-2">
              {pokemon.name}
            </h1>
            <h1 className="first-letter:uppercase font-semibold py-2 text-gray-700">
              {`#${pokemon.id}`}
            </h1>
          </div>
          <div className="w-full flex flex-row justify-center">
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="w-20 border px-2 mx-2 rounded"
                style={{ backgroundColor: pokemonType[type.type.name] }}
              >
                <h1 className="text-center">{type.type.name}</h1>
              </div>
            ))}
          </div>
          <div className="w-full pt-4">
            <h1 className="font-bold">Base Stats:</h1>
            <div>
              {pokemon.stats.map((stat) => (
                <div
                  className="flex flex-row items-center"
                  key={stat.stat.name}
                >
                  <h1 className="font-medium text-sm uppercase mr-2">
                    {`${stat.stat.name}:`}
                  </h1>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => console.log(pokemon)}>Check pokemon</button>
      </div>
      <div>
        <PokemonSpecies speciesURL={pokemon.species.url} />
      </div>
    </div>
  );
};

export default SinglePokemon;
