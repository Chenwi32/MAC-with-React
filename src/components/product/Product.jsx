import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import Rating from "../Rating";
import { useHistory } from "react-router";
/* import { Link as button } from "react-router-dom"; */

function Product({ id, title, image, price, rating, reviews }) {
  const history = useHistory();

  const dispatch = useStateValue()[1];

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
      },
    });
  };

  return (
    <div className="product ">
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="about__product">
        <p className="product__details">{title}</p>

        <p>
          <small>XAF</small>
          <strong> {price}</strong>
        </p>

        <Rating rating={rating} reviews={reviews} />
        {/* <div className="rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="rating__stars" key={i}>
                &#x2B50;
              </p>
            ))}
        </div> */}

        <button onClick={addToCart} className="addtocart btn">
          Add to cart
        </button>

        <button
          className="learn-more"
          onClick={() => history.push(`/product/${id}`)}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Product;
