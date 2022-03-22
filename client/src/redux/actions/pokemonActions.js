import axios from "axios";

export const fetchPokemonList = (page) => async (dispatch) => {
  const perPage = 20;
  const offset = page * perPage - perPage;

  dispatch({
    type: "POKEMON_LIST_LOADING",
  });

  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
    .then((res) => {
      dispatch({
        type: "POKEMON_LIST_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: "POKEMON_LIST_FAIL",
      });
    });
};

export const fetchPokemon = (pokemon) => async (dispatch) => {
  dispatch({
    type: "POKEMON_LOADING",
  });

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      dispatch({
        type: "POKEMON_SUCCESS",
        payload: res.data,
        pokemon: pokemon,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: "POKEMON_FAIL",
      });
    });
};
