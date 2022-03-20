import React, { useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../redux/actions/pokemonActions";
import PokemonCards from "../components/PokemonCards";
import _ from "lodash";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData(2);
  }, []);

  const fetchData = (page) => {
    dispatch(fetchPokemonList(page));
  };

  return (
    <div>
      {pokemonList.data ? (
        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
          {pokemonList.data.map((pokemon) => (
            <div key={pokemon.name}>
              <PokemonCards pokemonURL={pokemon.url} />
            </div>
          ))}
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};
export default Home;
