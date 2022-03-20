import { combineReducers } from "redux";
import pokemon_list_reducer from "./pokemon_list_reducer";

const rootReducer = combineReducers({
  pokemonList: pokemon_list_reducer,
});

export default rootReducer;
