import React from "react";
import PokemonListContainer from "../components/PokemonListContainer";
import { TabTitle } from "../utils/TabTitle";

const Home = () => {
  TabTitle("Pokedex");
  return (
    <div className="pb-4 px-2 bg-stone-50 pt-16 min-h-screen">
     <h1
        onClick={() => {
          window.open(
            "https://www.facebook.com",
            "_blank",
            "width=500,height=500"
          );
        }}>
        TEST ON MOBILE
      </h1>
      <PokemonListContainer />
    </div>
  );
};
export default Home;
