import React from "react";
import {
  product_19,
  product_20,
  product_21,
  product_22,
  product_23,
} from "../../images/imageindex";
import Product from "../../product/Product";
import DressingFilter from "../Dressing/DressingFilter";

function Fabrics() {
  return (
    <div className="products__container container">
      <DressingFilter />

      <div className="one__row grid__3">
        <Product
          title="Dining Table Tray"
          image={product_19}
          price={15000}
          rating={5}
          id={6}
        />
        <Product
          title="Table Flower Vase"
          image={product_20}
          price={4500}
          rating={3}
          id={2}
        />
        <Product
          title="Large Floor Flower Vase to be finished to your taste"
          image={product_21}
          price={3000}
          rating={3}
          id={8}
        />

        <Product
          title="Table Flower Vase"
          image={product_22}
          price={3000}
          rating={3}
          id={12}
        />

        <Product
          title="Table Flower Vase"
          image={product_23}
          price={3000}
          rating={3}
          id={12}
        />
      </div>
    </div>
  );
}

export default Fabrics;
