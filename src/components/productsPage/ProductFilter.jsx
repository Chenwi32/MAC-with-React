import React from "react";
import "./ProductFilter.css";

function ProductFilter() {
  return (
    <div className="filter flex">
      <button className="filter__option">Clay</button>
      <button className="filter__option">Plastic</button>
      <button className="filter__option">Wood</button>
      <button className="filter__option">Metal</button>
      <button className="filter__option">Mixed</button>
    </div>
  );
}

export default ProductFilter;
