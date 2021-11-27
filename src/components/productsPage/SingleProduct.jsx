import React from "react";
import data from "../../data";

function SingleProduct(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="flex">
        <div className="productimage">
          {<img src={product.image} alt={product.title} />}
          <h1> Product Image</h1>
        </div>
        <div className="productdetails"></div>
        <div className="productaction"></div>
      </div>
    </div>
  );
}

export default SingleProduct;
