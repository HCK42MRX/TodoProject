import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function SearchInput() {
  return (
    <div className="flex items-center gap-x-2 bg-white rounded-2xl relative w-[310px] h-[40px]">
      <input type="text" name="" className="bg-transparent myInputFieldStyle" id="" placeholder="Search a task"/>
      <FontAwesomeIcon icon={faSearch} className="bg-slate-900 absolute text-white -right-1 rounded-r-2xl h-[40px] w-6 px-3 cursor-pointer"/>
    </div>
  );
}
