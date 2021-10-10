import React from "react";
import {
  product_15,
  product_16,
  product_17,
  product_18,
} from "../../images/imageindex";
import Product from "../../product/Product";
import "../ProductFilter.css";

function Dressing() {
  return (
    <div className="products__container container">
      <div className="filter flex">
        <button className="filter__option">Men</button>
        <button className="filter__option">Women</button>
        <button className="filter__option">Children</button>
      </div>

      <div className="one__row grid__3">
        <Product
          title="Table Flower Vase"
          image={product_15}
          price={3000}
          rating={3}
          id={4}
        />
        <Product
          title="Table Flower Vase"
          image={product_16}
          price={4500}
          rating={3}
          id={2}
        />
        <Product
          title="Table Flower Vase"
          image={product_17}
          price={4500}
          rating={3}
          id={2}
        />
        <Product
          title="Table Flower Vase"
          image={product_18}
          price={4500}
          rating={3}
          id={2}
        />
      </div>
    </div>
  );
}

export default Dressing;
