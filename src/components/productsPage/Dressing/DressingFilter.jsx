import React from "react";
import { useHistory } from "react-router";

function DressingFilter() {
  const history = useHistory();

  return (
    <div className="filter flex">
      <button className="filter__option">Men</button>

      <button className="filter__option">Women</button>

      <button className="filter__option">Children</button>

      <button className="filter__option">Unisex</button>

      <button className="filter__option">Couple</button>

      <button
        className="filter__option"
        onClick={(event) => history.push("/fabrics")}
      >
        Fabrics
      </button>
    </div>
  );
}

export default DressingFilter;
