const pokemon_list_reducer = (
  state = { loading: false, data: [], errorMessage: "", count: 0 },
  action
) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return { ...state, loading: true, errorMessage: "" };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        count: action.payload.count,
        errorMessage: "",
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "Unable to get pokemon.",
      };
    default:
      return state;
  }
};

export default pokemon_list_reducer;
