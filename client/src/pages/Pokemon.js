import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../redux/actions/pokemonActions";
import SinglePokemon from "../components/SinglePokemon";
import LoadingComponent from "../components/LoadingComponent";
import _ from "lodash";
import { TabTitle } from "../utils/TabTitle";

const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemonName } = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  TabTitle(pokemonName);

  useEffect(() => {
    dispatch(fetchPokemon(pokemonName));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  const showData = () => {
    if (pokemon.loading) {
      return <LoadingComponent />;
    }

    if (!_.isEmpty(pokemon.data[pokemonName])) {
      return <SinglePokemon pokemonName={pokemonName} />;
    }

    if (pokemon.errorMessage !== "") {
      return <p className="pt-16">{pokemon.errorMessage}</p>;
    }
  };

  return <div className="py-4 bg-stone-50 px-4">{showData()}</div>;
};

export default Pokemon;
