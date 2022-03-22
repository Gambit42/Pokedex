import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";
import { fetchPokemonList } from "../redux/actions/pokemonActions";
import Pagination from "./Pagination";
import LoadingComponent from "./LoadingComponent";
import _ from "lodash";

const PokemonListContainer = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = (page) => {
    dispatch(fetchPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <LoadingComponent />;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 sm:w-10/12 sm:mx-auto md:w-auto">
            {pokemonList.data.map((pokemon) => (
              <div key={pokemon.name}>
                <PokemonCards pokemonURL={pokemon.url} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (pokemonList.errorMessage !== "") {
      return <p>{pokemonList.errorMessage}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      {showData()}
      <Pagination fetchData={fetchData} />
    </div>
  );
};

export default PokemonListContainer;
