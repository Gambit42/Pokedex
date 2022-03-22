import { combineReducers } from "redux";
import pokemon_list_reducer from "./pokemon_list_reducer";
import pokemon_reducer from "./single_pokemon_reducer";

const rootReducer = combineReducers({
  pokemonList: pokemon_list_reducer,
  pokemon: pokemon_reducer,
});

export default rootReducer;
