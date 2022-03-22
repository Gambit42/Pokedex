const pokemon_reducer = (
  state = { loading: false, data: {}, errorMessage: "" },
  action
) => {
  switch (action.type) {
    case "POKEMON__LOADING":
      return { ...state, loading: true, errorMessage: "" };
    case "POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        data: { ...state.data, [action.pokemon]: action.payload },
        errorMessage: "",
      };
    case "POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "Unable to get pokemon.",
      };
    default:
      return state;
  }
};

export default pokemon_reducer;
