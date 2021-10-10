import React from "react";
import { product_10, product_11 } from "../../images/imageindex";
import Product from "../../product/Product";
import ProductFilter from "../ProductFilter";

function Office() {
  return (
    <div className="products__container container">
      <ProductFilter />

      <div className="one__row grid__3">
        <Product
          title="Dining Table Tray"
          image={product_10}
          price={15000}
          rating={5}
          id={6}
        />
        <Product
          title="Table Flower Vase"
          image={product_11}
          price={4500}
          rating={3}
          id={2}
        />
      </div>
    </div>
  );
}

export default Office;
