import React from "react";
import "../Products.css";
import {
  product_3,
  product_4,
  product_6,
  product_7,
  product_8,
  product_11,
  product_10,
} from "../../images/imageindex";
import Product from "../../product/Product";
import ProductFilter from "../ProductFilter";

function HomeProducts() {
  return (
    <div className="products__container container">
      <ProductFilter />

      <div className="one__row grid__3">
        <Product
          title="Table Flower Vase"
          image={product_3}
          price={4500}
          rating={3}
          id={2}
        />
        <Product
          title="Dining Table Tray"
          image={product_4}
          price={12000}
          rating={4}
          id={7}
        />
        <Product
          title="Large Floor Flower Vase to be finished to your taste"
          image={product_10}
          price={3000}
          rating={3}
          id={8}
        />
        <Product
          title="Table Flower Vase"
          image={product_6}
          price={2500}
          rating={3}
          id={5}
        />
        <Product
          title="Dining Table Tray"
          image={product_7}
          price={2000}
          rating={4}
          id={9}
        />

        <Product
          title="Dining Table Tray"
          image={product_8}
          price={5000}
          rating={4}
          id={3}
        />

        <Product
          title="Table Flower Vase"
          image={product_11}
          price={3000}
          rating={3}
          id={12}
        />
      </div>
    </div>
  );
}

export default HomeProducts;
