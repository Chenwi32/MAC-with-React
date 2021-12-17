import React from "react";
import data from "../../data";
import Header from "../header/Header";
import Rating from "../Rating";
import "./SingleProduct.css";

function SingleProduct(props) {
  const product = data.products.find(
    (x) => x._id === parseInt(props.match.params.id)
  );

  const { image, title, price, description, rating, reviews, type } = product;

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container single-product flex__col">
      <Header />

      <div className="single-product__image flex">
        {<img src={image} alt={title} />}
      </div>

      <div className="single-product__details">
        <h3> {product.title}</h3>

        <p>
          <strong>Type: {type}</strong>
        </p>

        <p className="description">
          <strong>Description:</strong>

          <br />

          {description}
        </p>

        <p>
          <strong>Price: </strong>
          <small>XAF</small> <strong>{price}</strong>
        </p>

        <Rating reviews={reviews} rating={rating} />
      </div>

      <div className="single-product__action flex__col">
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
