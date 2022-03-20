import axios from "axios";

export const fetchPokemonList = (page) => async (dispatch) => {
  const perPage = 15;
  const offset = page * perPage - perPage;

  dispatch({
    type: "POKEMON_LIST_LOADING",
  });

  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
    .then((res) => {
      console.log(res.data);
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
