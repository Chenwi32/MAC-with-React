import React from "react";
import Product from "../product/Product";
import "../product/Product.css";

import "../home/Home.css";
import "./Products.css";
import data from "../../data";

function Products() {
  return (
    <div className="products__container container">
      <div className="one__row grid__3">
        {data.products.map((product) => {
          const { title, image, price, rating, reviews, _id } = product;
          return (
            <Product
              title={title}
              image={image}
              price={price}
              rating={rating}
              reviews={reviews}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
