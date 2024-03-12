import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// components
import ButtonIcon from "../Button/ButtonIcon/Index";

export default function TodoItems({todoName}) {
  return (
    <div className="bg-white py-4 px-5 rounded-2xl flex items-center justify-between">
      <h1>{todoName}</h1>
      <div className="action flex items-center gap-x-4">
        <ButtonIcon icon={faCheck} className="text-black bg-green-600 h-4 p-3 rounded-full"/>
        <ButtonIcon icon={faTrash} className="text-black bg-red-600 h-4 p-3 rounded-full"/>
      </div>
    </div>
  );
}
