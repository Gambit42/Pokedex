import React from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({ fetchData }) => {
  const pokemonList = useSelector((state) => state.pokemonList);
  return (
    <>
      <ReactPaginate
        pageCount={Math.ceil(pokemonList.count / 20)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        onPageChange={(data) => fetchData(data.selected + 1)}
        activeClassName="bg-red-600 text-white"
        pageClassName="border-y border-r border-gray-400 py-2 px-4 h-10"
        breakClassName="border-y border-r border-gray-400 py-2 px-4  h-10"
        className="outline-none mx-auto flex flex-row mt-5 max-w-sm h-10 items-center justify-center font-roboto"
        previousClassName="rounded-tl-lg rounded-bl-lg border border-gray-400 lowercase px-4 py-2 h-10 flex items-center"
        nextClassName="rounded-tr-lg rounded-br-lg border-y border-r border-gray-400 lowercase px-4 py-2 h-10 flex items-center"
        previousLabel={<MdNavigateBefore className="w-6 h-6 text-gray-800" />}
        nextLabel={<MdNavigateNext className="w-6 h-6 text-gray-800" />}
      />
    </>
  );
};

export default Pagination;
