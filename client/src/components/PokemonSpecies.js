import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const PokemonSpecies = ({ speciesURL }) => {
  const [evolutions, setEvolutions] = useState([]);
  const { pokemonName } = useParams();

  useEffect(() => {
    axios
      .get(speciesURL)
      .then((res) => {
        axios
          .get(res.data.evolution_chain.url)
          .then((result) => {
            console.log(result.data.chain);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemonName]);

  return <div>PokemonSpecies</div>;
};

export default PokemonSpecies;
