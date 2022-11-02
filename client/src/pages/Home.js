import React from "react";
import PokemonListContainer from "../components/PokemonListContainer";
import { TabTitle } from "../utils/TabTitle";

const Home = () => {
  TabTitle("Pokedex");
  return (
    <div className="pb-4 px-2 bg-stone-50 pt-16 min-h-screen">
      <PokemonListContainer />
    </div>
  );
};
export default Home;
