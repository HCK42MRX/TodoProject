import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ButtonIcon({ className, icon }) {
  return (
      <FontAwesomeIcon icon={icon} className={className} />
  );
}
