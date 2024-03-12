import React from "react";


export default function ButtonAction({type, className, placeholder, onClick}){
  return(
    <button type="button" onClick={onClick} className={className}>{placeholder}</button>
  );
}
