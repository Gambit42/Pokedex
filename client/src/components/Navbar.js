import React from "react";
import { MdOutlineCatchingPokemon, MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-14 flex flex-row items-center justify-between bg-gray-300 px-4 py-2">
      <div className="flex flex-row items-center">
        <MdOutlineCatchingPokemon className="w-6 h-6 mr-1" />
        <h1>PokeDex</h1>
      </div>
      <div className="flex flex-row items-center bg-white rounded p-1">
        <MdOutlineSearch className="w-6 h-6 mr-1 text-gray-400" />
        <input
          className="bg-transparent outline-none w-28"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
