import React from "react";
import { product_1 } from "../../images/imageindex";
import Product from "../../product/Product";
import "./PremiumProd.scss";

function PremiumProd() {
  return (
    <div className="premium-container flex__col">
      <h2 className="title">Premium Product</h2>

      <div className="premium flex">
        <Product
          title="Floor Flower Vase with Inscription"
          image={product_1}
          price={15000}
          rating={5}
          id={6}
        />
      </div>
    </div>
  );
}

export default PremiumProd;
