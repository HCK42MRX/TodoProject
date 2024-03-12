import React from "react";
import { Link } from "react-router-dom";


export default function ButtonRedirect({placeholder, className, link}){
  return(
    <Link to={link} className={className}>{placeholder}</Link>
  );
}
