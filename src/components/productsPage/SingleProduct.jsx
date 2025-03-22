import React from "react";
import data from "../../data";
import { useStateValue } from "../../StateProvider";
import Header from "../header/Header";
import Rating from "../Rating";
import "./SingleProduct.css";

function SingleProduct(props) {
  const product = data.products.find(
    (x) => x._id === parseInt(props.match.params.id)
  );

  const {id, image, title, price, description, rating, reviews, type } = product;

  const dispatch = useStateValue()[1];

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container single-product flex__col flex__center">
        <div className="single-product__image flex">
          {<img src={image} alt={title} />}
        </div>

        <div className="single-product__details">
          <h4> {product.title}</h4>

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

        <div className="single-product__action flex__col flex__center">
          <p className="product__status flex">
            <span>Status</span>
            <span className="success">In stock</span>
          </p>

          <div className="product__quantity flex">
            <p>Quantity</p>

            <input type="number" />
          </div>

          <p className=" product__price flex">
            <span>Cost: </span>
            <span>
              <strong>{price}</strong>
            </span>
          </p>
          <button className="btn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
