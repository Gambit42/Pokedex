import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import Pokeball from "../images/pokeball.png";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../redux/actions/pokemonActions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit_search = (e) => {
    if (e.key === "Enter") {
      navigate(`/pokemon/${search.toLowerCase()}`);
      dispatch(fetchPokemon(search.toLowerCase()));
      setSearch("");
    }
  };

  return (
    <div className="h-14 bg-white shadow-md fixed w-full px-4 py-2 font-roboto z-50">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto h-full">
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Pokeball} alt="pokeball" className="w-8 h-8 mr-1" />
          <h1 className="font-bold text-md sm:text-lg">Pokédex</h1>
        </div>
        <div className="flex flex-row items-center bg-stone-50 rounded p-1 border">
          <MdOutlineSearch
            className="w-6 h-6 mr-1 text-gray-400 cursor-pointer"
            onClick={() => {
              if (search !== "") {
                navigate(`/pokemon/${search.toLowerCase()}`);
                dispatch(fetchPokemon(search.toLowerCase()));
                setSearch("");
              }
            }}
          />
          <input
            className="bg-transparent outline-none w-28"
            placeholder="Search"
            onChange={handleSearch}
            value={search}
            onKeyUp={handleSubmit_search}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
